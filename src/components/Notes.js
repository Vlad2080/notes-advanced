import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import styles from './Notes.module.css';

const Notes = forwardRef(({ onAddNote }, ref) => {
    const [note, setNote] = useState('');
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));

    return (
        <div className={styles.notes}>
            <input
                ref={inputRef}
                className={styles.input}
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <button className={styles.button} onClick={() => {
                onAddNote(note);
                setNote('');
            }}>Add Note</button>
        </div>
    );
});

export default Notes;
