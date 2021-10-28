import React, { useCallback, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ScreensStackParamList } from '../models/Screens';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { useFocusEffect } from '@react-navigation/core';

type Props = NativeStackScreenProps<ScreensStackParamList, 'Signup'>;

const SignupScreen: React.FC<Props> = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      return () => clearErrorMessage();
    }, [])
  );

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonLabel="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        text="Already have an account? Sign in instead"
        routeName="Signin"
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginBottom: 100,
  },
});
