import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {}

const TrackDetailScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Track Detail Screen</Text>
      </View>
    </SafeAreaView>
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
