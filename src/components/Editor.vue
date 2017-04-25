<template>
	<div class="edit-panel">
		<div class="edit-tool">
			<span @click="baclList" class="glyphicon glyphicon-menu-left back-icon"></span>
			<span v-text="activeNote.date"></span>
		</div>
		<textarea class="edit-area" v-focus="editing" v-model="activeNote.content" @input="updateNote"></textarea>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default{
		data () {
	    return {
	      editing: true
	    }
	  },
		directives: {
			focus(el,{value},{context}) {
				if(value){
					context.$nextTick(() => {
						el.focus();
					})
				}
			}
		},
		computed: {
			...mapGetters([
				'activeNote'
			])
		},
		methods: {
			updateNote() {
				this.$store.dispatch('editNote',this.activeNote);
			},
			baclList() {
				this.$store.dispatch('detectionNote',this.activeNote);
				this.$router.push({path: '/'});
			}
		}
	}
</script>

<style>
	.edit-panel{
		height: 100%;
	}
	.edit-tool{
		padding: 10px;
		background-color: #fff;
	}
	.back-icon{
		color: #A3A3A3
	}
	.edit-area{
		padding: 5px 15px;
		width: 100%;
		height: 92.8%;
		border: 0;
		resize: none;
		outline: none;
	}
</style>