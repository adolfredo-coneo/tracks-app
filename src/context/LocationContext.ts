import { Dispatch } from 'react';
import { LocationObject } from 'expo-location';

import createDataContext, { Action } from './createDataContext';
import Locations from '../models/Location';

const locationReducer = (state: Locations, action: Action) => {
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload };
    case 'start_recording':
      return { ...state, recording: true };
    case 'stop_recording':
      return { ...state, recording: false };
    case 'add_location':
      return { ...state, locations: [...state.locations, action.payload] };
    case 'change_name':
      return { ...state, name: action.payload };
    case 'reset':
      return { ...state, locations: [] };
    default:
      return state;
  }
};

const changeName = (dispatch: Dispatch<Action>) => (name: string) => {
  dispatch({ type: 'change_name', payload: name });
};
const startRecording = (dispatch: Dispatch<Action>) => () => {
  dispatch({ type: 'start_recording' });
};
const stopRecording = (dispatch: Dispatch<Action>) => () => {
  dispatch({ type: 'stop_recording' });
};
const addLocation =
  (dispatch: Dispatch<Action>) =>
  (currentLocation: LocationObject, recording: boolean) => {
    console.log('Tracking', recording);
    dispatch({ type: 'add_current_location', payload: currentLocation });
    if (recording) {
      console.log('Tracking and Recording', recording);
      dispatch({ type: 'add_location', payload: currentLocation });
    }
  };

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName },
  {
    recording: false,
    locations: [],
    currentLocation: null,
    name: '',
  }
);
