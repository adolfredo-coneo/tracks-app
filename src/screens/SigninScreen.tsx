import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ScreensStackParamList from '../models/Screens';

type Props = NativeStackScreenProps<ScreensStackParamList, 'Signin'>;

const SigninScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Sign In Screen</Text>
      <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
