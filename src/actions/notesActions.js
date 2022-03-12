import { types } from '../types/types';

//* ACTIONS SINCRONOS
export const doNotesActiveNote = (note) => ({
  type: types.notesActiveNote,
  payload: {
    note,
  },
});

//* ACTIONS ASINCRONOS
