import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const AccountScreen = (props: Props) => {
  return (
    <View>
      <Text style={styles.title}>Account Screen</Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
