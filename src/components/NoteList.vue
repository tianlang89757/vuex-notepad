<template>
  <div class="note-content">
    <ul class="note-list" v-if="notes.length">
      <li v-for="note in filterNote" @click="editNote(note)">
        <div class="note-date">{{ note.date }}</div>
        <p class="note-info">{{ note.content.trim().substring(0,50) }}</p>
        <input type="checkbox" class="toggle" :checked="note.done"  v-show="state.isEdit">
      </li>
    </ul>
    <p v-else class="hint">暂无便签，请添加...</p>
    <div class="shade" v-show="state.isSearch"></div>
  </div>
  
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        hasDelete: false,
        timeStop: ''
      }
    },
    computed: {
      ...mapGetters([
        'filterNote'
      ]),
      notes() {
        return this.$store.state.notes;
      },
      state() {
        return this.$store.state;
      }
    },
    methods: {
      editNote(noteItem) {
        if(this.state.isEdit){
          this.$store.dispatch('toggleNote',noteItem)
        }else{
          this.$router.push({ path: '/editor' });
          this.$store.dispatch('editNote',noteItem)
        }
      }
    }
  }
</script>

<style scoped>
  ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .note-list li{
    position: relative;
    height: 100px;
    padding-left: 30px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 10px;
    background-color: #fff;
    z-index: 0;
  }
  .note-list li .toggle {
    text-align: center;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    right: 20px;
    bottom: 0;
    margin: -1px 0 0 0;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    z-index: 8;
  }

  .note-list li .toggle:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#dddddd" stroke-width="3"/></svg>');
  }

  .note-list li .toggle:checked:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
  }
  .note-date{
    padding: 5px 0;
    color: #C5AB15;
    border-bottom: 1px solid #e5e5e5;
  }
  .note-info{
    padding: 5px 0;
    color: #444;
  }
  .hint{
    margin-top: 20%;
    text-align: center;
    font-size: 16px;
    color: #444;
    text-shadow: 1px 2px 1px #fff;
  }
</style>
