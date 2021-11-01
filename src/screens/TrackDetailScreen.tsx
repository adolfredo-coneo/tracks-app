import React, { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

import { TabStackParamList } from '../models/Screens';
import { Context as TrackContext } from '../context/TrackContext';

type Props = NativeStackScreenProps<TabStackParamList, 'TrackDetail'>;

const TrackDetailScreen: React.FC<Props> = ({ route }) => {
  const { state } = useContext(TrackContext);
  const trackId = route.params.id;

  const track = state.find((track) => track._id === trackId);
  const initialCoords = track?.locations[0].coords;

  return (
    <View>
      <Text style={styles.title}>{track?.name}</Text>
      {track && initialCoords ? (
        <MapView
          style={styles.map}
          initialRegion={{
            ...initialCoords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Polyline
            coordinates={track.locations.map((loc) => loc.coords)}
            strokeWidth={3}
            strokeColor="blue"
            lineDashPattern={[1]}
          />
        </MapView>
      ) : null}
    </View>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
