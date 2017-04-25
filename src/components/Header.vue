<template>
	<div class="header clearfix">
		<div class="col-xs-4">
			<button type="button" @click="cancelCheck" v-show="state.isEdit" class="btn btn-default btn-xs">取消</button>
		</div>
		<div class="col-xs-4"> 
			<div class="header-title" v-show="!deleteNote.length">{{title}}</div> 
			<div class="header-title" v-show="deleteNote.length">{{checkTitle}}</div> 
		</div>
		<div class="col-xs-4">
			<button type="button" @click="editNoteList" v-show="!state.isEdit" class="btn btn-default btn-xs pull-right">编辑</button>
			<button type="button" :checked="allChecked" @click="toggleAll({done: !allChecked})" v-show="state.isEdit" class="btn btn-default btn-xs pull-right">{{toggleBtn}}</button>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	export default{
		data() {
			return {
				title: '便签',
				toggleBtn:'全选'
			}
		},
		computed: {
			allChecked() {
				return this.$store.state.notes.every(note => note.done)
			},
			deleteNote() {
				return this.$store.state.deleteNote;
			},
			state() {
				return this.$store.state;
			},
			checkTitle() {
				return '选择'+ this.$store.state.deleteNote.length +'项'
			}
		},
		methods: {
			...mapActions([
				'cancelCheck'
			]),
			toggleAll(done) {
				if(done.done){
					this.toggleBtn = '取消全选'
				}else{
					this.toggleBtn = '全选'
				}
				this.$store.dispatch('toggleAll',done);
			},
			editNoteList() {
				this.state.isEdit = true;
			}
		}
	}
</script>

<style>
.header{
	padding:10px;
}
.header-title{
	text-align: center;
}
.header .btn{
	outline: none;
}
.disabled{
	display: none
}
</style>