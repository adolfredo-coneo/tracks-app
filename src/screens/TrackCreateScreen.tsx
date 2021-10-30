//import '../_mockLocation';
import React, { useCallback, useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';

import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

interface Props {}

const TrackCreateScreen = (props: Props) => {
  const { addLocation } = useContext(LocationContext);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [err] = useLocation(isFocused, addLocation);

  useFocusEffect(
    useCallback(() => {
      setIsFocused(true)

      return () => setIsFocused(false);
    }, [])
  );

  return (
    <SafeAreaView>
      <View>
        <Text h2 style={styles.title}>
          Create Track
        </Text>
        <Map />
        {err ? <Text>Please enable location services</Text> : null}
      </View>
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({
  title: {},
});
