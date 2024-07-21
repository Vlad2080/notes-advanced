export const initialState = { notes: [], filter: '' };

export function notesReducer(state, action) {
    switch (action.type) {
        case 'ADD_NOTE':
            return { ...state, notes: [...state.notes, action.note] };
        case 'DELETE_NOTE':
            return { ...state, notes: state.notes.filter(note => note.id !== action.id) };
        case 'SET_FILTER':
            return { ...state, filter: action.filter };
        default:
            throw new Error();
    }
}
