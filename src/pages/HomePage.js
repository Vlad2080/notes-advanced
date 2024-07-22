import React from 'react';
import { useSelector } from 'react-redux';
import NoteList from '../components/NoteList';

const HomePage = () => {
    const notes = useSelector((state) => state.notes);

    return (
        <div>
            <h2>All Notes</h2>
            <NoteList notes={notes} />
        </div>
    );
};

export default HomePage;
