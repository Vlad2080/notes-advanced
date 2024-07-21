import { useReducer, useCallback, useMemo, useDebugValue } from 'react';
import { notesReducer, initialState } from '../reducers/notesReducer';

const useNotes = () => {
    const [state, dispatch] = useReducer(notesReducer, initialState);

    const addNote = useCallback((note) => {
        dispatch({ type: 'ADD_NOTE', note: { id: Date.now(), text: note } });
    }, []);

    const deleteNote = useCallback((id) => {
        dispatch({ type: 'DELETE_NOTE', id });
    }, []);

    const setFilter = useCallback((filter) => {
        dispatch({ type: 'SET_FILTER', filter });
    }, []);

    const filteredNotes = useMemo(() => {
        return state.notes.filter(note => note.text.includes(state.filter));
    }, [state.notes, state.filter]);

    useDebugValue(state.notes.length > 0 ? 'Notes available' : 'No notes');

    return { state, addNote, deleteNote, setFilter, filteredNotes };
};

export default useNotes;
