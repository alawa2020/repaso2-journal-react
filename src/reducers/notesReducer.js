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

    default:
      return state;
  }
};
