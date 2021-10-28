import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { TabStackParamList } from '../models/Screens';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<TabStackParamList, 'TrackList'>;

const TrackListScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Track List Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('TrackDetail')}
        />
      </View>
    </SafeAreaView>
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
