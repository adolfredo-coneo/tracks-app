import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {}

const TrackCreateScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Track Create Screen</Text>
      </View>
    </SafeAreaView>
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
