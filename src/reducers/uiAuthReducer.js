import { types } from '../types/types';

const initialState = { error: '', loading: false };

export const uiAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiAuthSetError:
      return {
        ...state,
        error: action.payload.errorMessage,
      };
    case types.uiAuthRemoveError:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};
