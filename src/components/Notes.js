import React, { forwardRef, useState } from 'react';

const Notes = forwardRef(({ onAddNote }, ref) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAddNote = () => {
        if (title && content) {
            onAddNote({ title, content });
            setTitle('');
            setContent('');
        } else {
            console.error('Title and content cannot be empty');
        }
    };

    return (
        <div>
            <input
                ref={ref}
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
});

export default Notes;
