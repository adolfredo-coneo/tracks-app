import React, { useCallback, useContext } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/core';

import { TabStackParamList } from '../models/Screens';
import { Context as TrackContext } from '../context/TrackContext';

type Props = NativeStackScreenProps<TabStackParamList, 'TrackList'>;

const TrackListScreen: React.FC<Props> = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  useFocusEffect(
    useCallback(() => {
      fetchTracks();

      return () => console.log('Not Focus');
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { id: item._id })
              }
            >
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron tvParallaxProperties />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
