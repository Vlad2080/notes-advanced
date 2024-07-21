import React from 'react';
import styles from './NoteList.module.css';

const NoteList = ({ notes, onDeleteNote }) => {
    return (
        <ul className={styles.noteList}>
            {notes.map(note => (
                <li key={note.id} className={styles.noteItem}>
                    {note.text}
                    <button className={styles.deleteButton} onClick={() => onDeleteNote(note.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default NoteList;
