<template>
	<div class="search">
		<span class="glyphicon glyphicon-search search-icon"></span>
		<input type="text" class="form-control" v-model="searchTxt" @focus="onFocus" @keyup="search" placeholder="搜索...">
	</div>
</template>
<script>
	export default{
		data() {
			return {
				searchTxt: ''
			}
		},
		methods: {
			search() {
				this.$store.state.search = this.searchTxt;
			},
			onFocus() {
				this.$store.state.isSearch = false;
			}
		}
	}
</script>
<style>
.search{
	position: relative;
	padding: 0 10px 10px 10px;
	background-color: #f5f5f5;
}
.search-icon{
	position: absolute;
  margin: 8px 0 0 10px;
  color: #A3A3A3;
}
.form-control{
	padding-left: 30px;
	border-color: #e5e5e5;
	border-radius: 2px;
}
</style>