import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditNote = ({ notes, onEditNote }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const note = notes.find(note => note.id === id);

    const [title, setTitle] = useState(note ? note.title : '');
    const [content, setContent] = useState(note ? note.content : '');

    const handleEditNote = () => {
        if (title && content) {
            onEditNote(id, { title, content });
            navigate('/');
        } else {
            console.error('Title and content cannot be empty');
        }
    };

    if (!note) {
        return <div>Note not found</div>;
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleEditNote}>Save Note</button>
        </div>
    );
};

export default EditNote;
