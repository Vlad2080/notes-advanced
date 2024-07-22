import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditNote from '../components/EditNote';
import { editNote } from '../redux/actions/notesActions';

const EditNotePage = ({ match }) => {
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.notes);
    const noteId = parseInt(match.params.id);

    const handleEditNote = (id, data) => {
        dispatch(editNote(id, data));
    };

    return <EditNote notes={notes} onEditNote={handleEditNote} />;
};

export default EditNotePage;
