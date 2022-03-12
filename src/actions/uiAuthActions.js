import { types } from '../types/types';

export const doSetError = (errorMessage) => ({
  type: types.uiAuthSetError,
  payload: {
    errorMessage,
  },
});

export const doRemoveError = () => ({
  type: types.uiAuthRemoveError,
});
