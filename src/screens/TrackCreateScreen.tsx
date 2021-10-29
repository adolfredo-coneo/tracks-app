import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-elements';

import Map from '../components/Map';

interface Props {}

const TrackCreateScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text h2 style={styles.title}>Create Track</Text>
        <Map />
      </View>
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({
  title: {},
});
