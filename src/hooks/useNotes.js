import { useDispatch, useSelector } from 'react-redux';
import { addNote, editNote, deleteNote } from '../redux/actions/notesActions';

const useNotes = () => {
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.notes);
    const [filter, setFilter] = useState('');

    const filteredNotes = notes.filter((note) =>
        note.title.includes(filter) || note.content.includes(filter)
    );

    const handleAddNote = (note) => {
        dispatch(addNote(note));
    };

    const handleEditNote = (id, data) => {
        dispatch(editNote(id, data));
    };

    const handleDeleteNote = (id) => {
        dispatch(deleteNote(id));
    };

    return {
        notes,
        filter,
        setFilter,
        filteredNotes,
        addNote: handleAddNote,
        editNote: handleEditNote,
        deleteNote: handleDeleteNote,
    };
};

export default useNotes;
