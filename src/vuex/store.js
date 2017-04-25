import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import DateFormat from '../libs/dateFormat'

Vue.use(Vuex)

const state = {
	notes: [],
	activeNote: {},
	deleteNote: [],
	search: '',
	isSearch: true,
	isEdit: false
}

const mutations = {
	NEW_NOTE(state) {
		let newNote = {
			id: +new Date(),
			date: new Date().Format("yyyy-MM-dd hh:mm:ss"),
			content: '',
			done: false
		};
		state.notes.push(newNote);
		state.activeNote = newNote;
	},
	DEL_NOTE_GROUP(state) {
		for(let i = 0; i < state.deleteNote.length; i++){
				state.notes.splice(state.notes.indexOf(state.deleteNote[i]),1);
		}
		state.deleteNote = [];
		state.isEdit = false;
	},
	DEL_NOTE(state) {
		state.notes.splice(state.notes.indexOf(state.activeNote),1);
	},
	EDIT_NOTE(state,note) {
		state.activeNote = note;
		for(let i = 0; i < state.notes.length; i++){
			if(state.notes[i].id === note.id){
				state.notes[i] = note;
				break;
			}
		}
	},
	SET_ACTIVE_NOTE(state,note) {
		state.activeNote = note
	},
	TOGGLE_NOTE(state,note){
		note.done = !note.done;
		if(note.done){
			state.deleteNote.push(note);
		}else{
			state.deleteNote.splice(state.deleteNote.indexOf(note),1);
		}
	},
	DETECTION_NOTE(state,note) {
		if(note.content === ''){
			state.notes.splice(state.notes.indexOf(note),1);
		}
	},
	TOGGLE_ALL(state,done) {
		state.notes.forEach((note) =>{
			note.done = done.done;
			if(done.done){
				state.deleteNote.push(note);
			}else{
				state.deleteNote = [];
			}
		})
	},
	CANCEL_CHECK(state) {
		state.deleteNote = [];
		state.isEdit = false;
		state.notes.forEach((note) => {
			if(note.done){
				note.done = !note.done
			}
		});
	}
}

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})