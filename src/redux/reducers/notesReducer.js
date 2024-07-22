const initialState = [];

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state, { ...action.payload, id: state.length + 1 }];
        case 'EDIT_NOTE':
            return state.map((note) =>
                note.id === action.payload.id ? { ...note, ...action.payload.data } : note
            );
        case 'DELETE_NOTE':
            return state.filter((note) => note.id !== action.payload);
        default:
            return state;
    }
};

export default notesReducer;
