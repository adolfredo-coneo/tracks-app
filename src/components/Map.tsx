import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

interface Props {}

const Map = (props: Props) => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 37.78825 + i * 0.001,
      longitude: -122.4324 + i * 0.001,
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Polyline
        coordinates={points}
        lineDashPattern={[1]}
        strokeColor="red"
        strokeWidth={5}
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
