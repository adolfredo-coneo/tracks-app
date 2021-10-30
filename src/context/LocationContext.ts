import { Dispatch } from 'react';

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
    case 'reset':
      return { ...state, locations: [] };
    default:
      return state;
  }
};

const startRecording = (dispatch: Dispatch<Action>) => {};
const stopRecording = (dispatch: Dispatch<Action>) => {};
const addLocation = (dispatch: Dispatch<Action>, state: Locations) => {};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  {
    recording: false,
    locations: [],
    currentLocation: null,
  }
);
