import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

import { types } from '../types/types';
import { db } from '../firebase/config';

//* ACTIONS SINCRONOS
export const doNotesActiveNote = (note) => ({
  type: types.notesActiveNote,
  payload: {
    note,
  },
});

export const doNotesUpdateActiveNote = (note) => ({
  type: types.notesUpdateActiveNote,
  payload: {
    note,
  },
});

export const doNotesSaveNewNote = (newNote) => ({
  type: types.notesSaveNewNote,
  payload: {
    newNote,
  },
});
//* ACTIONS ASINCRONOS

export const startSaveNewNote = (newNote) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newDate = new Date().getTime();

    const uploadNote = { ...newNote };
    uploadNote.date = newDate;
    delete uploadNote.id;

    const notesCollection = collection(db, `/${uid}/journal/notes`);

    try {
      const { id } = await addDoc(notesCollection, uploadNote);
      dispatch(doNotesUpdateActiveNote({ date: newDate, id }));
      dispatch(doNotesSaveNewNote({ ...uploadNote, id }));
      Swal.fire('Note upload!', uploadNote.title, 'success');
    } catch (err) {
      console.log({ err });
      Swal.fire('Ocurrió un error!', err.message, 'error');
    }
  };
};
