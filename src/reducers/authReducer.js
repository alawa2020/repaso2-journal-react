// const initialState = {}
// const anotherState = {
//   uid: '5431245345d54df4s65',
//   name: 'UserName',
// }

import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        uid: action.payload.uid,
        name: action.payload.name,
      };
    default:
      return state;
  }
};
