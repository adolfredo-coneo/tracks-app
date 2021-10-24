import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import ScreensStackParamList from '../models/Screens';

type Props = NativeStackScreenProps<ScreensStackParamList, 'Signup'>;

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Sign Up screen</Text>
      <Button
        title="Go to login"
        onPress={() => navigation.navigate('Signin')}
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
