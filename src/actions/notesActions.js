import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import Swal from 'sweetalert2';

import { types } from '../types/types';
import { db } from '../firebase/config';
import { getNotes } from '../utils/getNotes';

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

export const doNotesLoadNotes = (notes) => ({
  type: types.notesLoadNotes,
  payload: {
    notes,
  },
});

export const doNotesUpdateNote = (note) => ({
  type: types.notesUpdateNote,
  payload: {
    note,
  },
});

export const doNotesDeleteNote = (id) => ({
  type: types.notesDeleteNote,
  payload: {
    id,
  },
});

export const doRemoveActiveNote = () => ({
  type: types.notesRemoveActiveNote,
});

export const doCleanNotes = () => ({
  type: types.notesCleanNotes,
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

export const startLoadNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const notes = await getNotes(uid);
    dispatch(doNotesLoadNotes(notes));
  };
};

export const startUpdateNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    try {
      const newDate = new Date().getTime();
      const noteToUpdate = { ...note };
      noteToUpdate.date = newDate;
      delete noteToUpdate.id;

      const docRef = doc(db, `/${uid}/journal/notes/`, `${note.id}`);
      await updateDoc(docRef, noteToUpdate);
      dispatch(doNotesUpdateNote({ ...noteToUpdate, id: note.id }));
      dispatch(doNotesUpdateActiveNote({ date: newDate }));

      Swal.fire('Note updated!', noteToUpdate.title, 'success');
    } catch (err) {
      console.log({ err });
      Swal.fire('Ocurrió un error!', err.message, 'error');
    }
  };
};

export const startDeleteNote = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    try {
      const docRef = doc(db, `/${uid}/journal/notes/`, id);
      await deleteDoc(docRef);
      dispatch(doNotesDeleteNote(id));
      dispatch(doRemoveActiveNote());
      Swal.fire('Note deleted', `Ref: ${id}`, 'success');
    } catch (err) {
      console.log({ err });
      Swal.fire('Ocurrió un error!', err.message, 'error');
    }
  };
};
