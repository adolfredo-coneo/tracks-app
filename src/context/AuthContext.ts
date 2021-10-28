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

const tryLocalSignin =
  (dispatch: Dispatch<Action>) => async (callback?: () => void) => {
    const token = await AsyncStorage.getItem('token');

    if (token) dispatch({ type: 'signin', payload: token });
    else if (callback) callback();
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

const clearErrorMessage = (dispatch: Dispatch<Action>) => () =>
  dispatch({ type: 'clear_error_message' });

const signout = (dispatch: Dispatch<Action>) => {
  return () => {
    AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
  };
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);
