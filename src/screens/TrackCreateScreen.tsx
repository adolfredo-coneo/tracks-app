import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const TrackCreateScreen = (props: Props) => {
  return (
    <View>
      <Text style={styles.title}>Track Create Screen</Text>
    </View>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
