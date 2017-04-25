export  const filterNote = (state) => {
	if(state.search != '' && state.notes.length>1){
		return state.notes.filter(note => note.content.indexOf(state.search) > -1) || {}
	}else{
		return state.notes || {}
	}
}

export const activeNote = (state) => {
	return state.activeNote
}