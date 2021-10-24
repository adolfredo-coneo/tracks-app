import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const TrackDetailScreen = (props: Props) => {
  return (
    <View>
      <Text style={styles.title}>Track Detail Screen</Text>
    </View>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
