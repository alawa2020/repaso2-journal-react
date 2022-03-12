import { types } from '../types/types';

const initialState = {
  notes: [],
  activeNote: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActiveNote:
      return {
        ...state,
        activeNote: { ...action.payload.note },
      };

    case types.notesUpdateActiveNote:
      return {
        ...state,
        activeNote: { ...state.activeNote, ...action.payload.note },
      };

    case types.notesSaveNewNote:
      return {
        ...state,
        notes: [{ ...action.payload.newNote }, ...state.notes],
      };

    case types.notesLoadNotes:
      return {
        ...state,
        notes: [...action.payload.notes],
      };

    case types.notesUpdateNote:
      const notesOrdered = state.notes.filter(
        (note) => note.id !== action.payload.note.id,
      );

      return {
        ...state,
        notes: [action.payload.note, ...notesOrdered],
      };
    default:
      return state;
  }
};
