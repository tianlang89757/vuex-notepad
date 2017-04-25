<template>
	<div class="toolbar">
		<span class="delete-icon" @click="delNoteGroup" v-show="deleteNote.length"><i class="glyphicon glyphicon-trash"></i></span>
		<span class="add-icon pull-right" @click="addNote"><i class="glyphicon glyphicon-plus"></i></span>
	</div>
</template>
<script>
	import { mapActions } from 'vuex'
	export default{
		computed: {
			deleteNote() {
				return this.$store.state.deleteNote;
			}
		},
		methods: {
			...mapActions([
				'delNoteGroup'
			]),
			addNote() {
				this.$store.dispatch('newNote');
				this.$router.push({ path: '/editor' })
			}
		}
	}
</script>
<style>
	.toolbar{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 20px;
	}
	.toolbar span{
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 42px;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    border-radius: 20px;
	}
	.add-icon{
		background-color: #C5AB15;
		color: #fff;
	}
	.delete-icon{
		background-color: #f00;
		color: #fff;
	}
</style>