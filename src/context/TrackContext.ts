import { Dispatch } from 'react';
import { LocationObject } from "expo-location";

import createDataContext, { Action } from './createDataContext';
import Track from '../models/Track';
import trackerApi from '../api/tracker';

const trackReducer = (state: Track[], action: Action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch: Dispatch<Action>) => async () => {
  const response = await trackerApi.get('/tracks');
  const tracks = await response.data;
  dispatch({ type: 'fetch_tracks', payload: tracks });
};

const createTrack =
  (dispatch: Dispatch<Action>) =>
  async (name: string, locations: LocationObject[], callback?: () => void) => {
    await trackerApi.post('/tracks', { name, locations });
    if (callback) callback();
  };

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
