import React from 'react';
import { useDispatch } from 'react-redux';
import CreateNote from '../components/CreateNote';
import { addNote } from '../redux/actions/notesActions';

const CreateNotePage = () => {
    const dispatch = useDispatch();

    const handleAddNote = (note) => {
        dispatch(addNote(note));
    };

    return <CreateNote onAddNote={handleAddNote} />;
};

export default CreateNotePage;
