import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ScreensStackParamList from '../models/Screens';

type Props = NativeStackScreenProps<ScreensStackParamList, 'Signup'>;

const TrackListScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Track List Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('TrackDetail')} />
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
