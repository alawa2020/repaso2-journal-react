import React from 'react';
import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { useSelector } from 'react-redux';

export const JournalScreen = () => {
  // hooks
  const { activeNote } = useSelector((state) => state.notes);

  // functions

  return (
    <div className="journal__main-content">
      <Sidebar />

      <main>{!activeNote ? <NothingSelected /> : <NoteScreen />}</main>
    </div>
  );
};
