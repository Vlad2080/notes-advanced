import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateNote = ({ onAddNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleAddNote = () => {
        if (title && content) {
            onAddNote({ title, content });
            setTitle('');
            setContent('');
            navigate('/');
        } else {
            console.error('Title and content cannot be empty');
        }
    };

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
            <button onClick={handleAddNote}>Add Note</button>
        </div>
    );
};

export default CreateNote;
