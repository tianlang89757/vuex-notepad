// 添加新便签
export const newNote = ({commit}) => {
	commit('NEW_NOTE')
}
// 编辑便签
export const editNote = ({commit},note) => {
	commit('EDIT_NOTE',note)
}
// 删除便签组
export const delNoteGroup = ({commit}) => {
	commit('DEL_NOTE_GROUP')
}
// 删除当前便签
export const delNote = ({commit}) => {
	commit('DEL_NOTE')
}
// 更新当前便签
export const updateActiveNote = ({commit},note) => {
	commit('SET_ACTIVE_NOTE',note)
}
// 勾选便签
export const toggleNote = ({commit},note) => {
	commit('TOGGLE_NOTE',note)
}
// 检测是否有内容
export const detectionNote = ({commit},note) => {
	commit('DETECTION_NOTE',note)
}
// 全选
export const toggleAll = ({commit},done) => {
	commit('TOGGLE_ALL',done);
}
// 取消
export const cancelCheck = ({commit}) => {
	commit('CANCEL_CHECK');
} 