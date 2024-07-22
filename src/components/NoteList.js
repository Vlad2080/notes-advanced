import React from 'react';
import { Link } from 'react-router-dom';

const NoteList = ({ notes, onDeleteNote }) => {
    return (
        <div>
            {notes.map((note) => (
                <div key={note.id}>
                    <h2>{note.title}</h2>
                    <p>{note.content}</p>
                    <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                    <Link to={`/edit/${note.id}`}>
                        <button>Edit</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default NoteList;
