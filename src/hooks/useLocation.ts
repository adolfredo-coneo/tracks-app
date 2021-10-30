import { useState, useEffect } from 'react';
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
  LocationObject,
} from 'expo-location';

export default (
  shouldTrack: boolean,
  callback: (location: LocationObject) => void
) => {
  const [err, setErr] = useState<unknown>(null);
  const [subscriber, setSubscriber] = useState<{ remove(): void } | null>(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      const subFunction = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback
      );
      setSubscriber(subFunction);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
        setSubscriber(null);
      }
    }
  }, [shouldTrack]);

  return [err];
};
