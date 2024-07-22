export const addNote = (note) => ({
    type: 'ADD_NOTE',
    payload: note,
});

export const editNote = (id, data) => ({
    type: 'EDIT_NOTE',
    payload: { id, data },
});

export const deleteNote = (id) => ({
    type: 'DELETE_NOTE',
    payload: id,
});
