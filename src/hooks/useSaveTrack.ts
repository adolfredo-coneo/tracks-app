import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/core';
import { useContext } from 'react';

import { Context as LocationContext } from '../context/LocationContext';
import { Context as TrackContext } from '../context/TrackContext';
import { TabStackParamList } from '../models/Screens';

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
    reset,
  } = useContext(LocationContext);
  const navigation =
    useNavigation<BottomTabNavigationProp<TabStackParamList>>();

  const saveTrack = () => {
    createTrack(name, locations, () => {
      reset();
      navigation.navigate('TrackList');
    });
  };

  return [saveTrack];
};
