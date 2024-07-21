import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import ThemeContext from './context/ThemeContext';
import useNotes from './hooks/useNotes';
import Notes from './components/Notes';
import NoteList from './components/NoteList';
import styles from './App.module.css';

const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { state, addNote, deleteNote, setFilter, filteredNotes } = useNotes();
  const notesRef = useRef();

  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Component unmounted');
  }, []);

  useLayoutEffect(() => {
    console.log('Layout effect');
  }, [state.notes]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Advanced Note Taking App</h1>
        <button
          className={styles.toggleButton}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Toggle Theme
        </button>
      </div>
      <Notes ref={notesRef} onAddNote={addNote} />
      <input
        className={styles.filterInput}
        value={state.filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter notes"
      />
      <NoteList notes={filteredNotes} onDeleteNote={deleteNote} />
      <button className={styles.toggleButton} onClick={() => notesRef.current.focus()}>
        Focus on Add Note Input
      </button>
    </div>
  );
};

export default App;
