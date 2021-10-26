import { Dispatch } from 'react';

import Auth from '../models/Auth';
import createDataContext, { Action } from './createDataContext';
import tracker from '../api/tracker';

const authReducer = (state: Auth, action: Action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { ...state, errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { ...state, token: null, errorMessage: '' };
    default:
      return state;
  }
};

const signup = (dispatch: Dispatch<Action>) => {
  return async (email: string, password: string, callback?: () => void) => {
    try {
      const response = await tracker.post('/signup', { email, password });
      console.log(response.data);
      if (callback) callback();
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong' });
    }
  };
};

const signin = (dispatch: Dispatch<Action>) => {
  return (email: string, password: string, callback?: () => void) => {};
};

const signout = (dispatch: Dispatch<Action>) => {
  return () => {};
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false, errorMessage: '', token: null }
);
