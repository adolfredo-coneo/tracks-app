import { Dispatch } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Auth from '../models/Auth';
import createDataContext, { Action } from './createDataContext';
import tracker from '../api/tracker';

const authReducer = (state: Auth, action: Action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { token: action.payload, errorMessage: '' };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const signup =
  (dispatch: Dispatch<Action>) =>
  async (email: string, password: string, callback?: () => void) => {
    try {
      const response = await tracker.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
      if (callback) callback();
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      });
    }
  };

const signin =
  (dispatch: Dispatch<Action>) =>
  async (email: string, password: string, callback?: () => void) => {
    try {
      const response = await tracker.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
      if (callback) callback();
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in',
      });
    }
  };

const signout = (dispatch: Dispatch<Action>) => {
  return () => {};
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: '' }
);
