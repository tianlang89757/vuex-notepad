<template>
	<div class="notepad">
    <Header></Header>
		<search></search>
    <note-list></note-list>
    <tool-bar></tool-bar>
	</div>
</template>

<script>
  import Header from './Header'
	import Search from './Search'
  import NoteList from './NoteList'
  import ToolBar from './ToolBar'
  export default {
    components:{
      Header,
      Search,
      NoteList,
      ToolBar
    }
  }
</script>
<style>
  .notepad{
    height: 100%;
  }
</style>