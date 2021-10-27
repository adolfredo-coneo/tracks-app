import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ScreensStackParamList } from '../models/Screens';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

type Props = NativeStackScreenProps<ScreensStackParamList, 'Signin'>;

const SigninScreen: React.FC<Props> = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Tracker"
        errorMessage={state.errorMessage}
        submitButtonLabel="Sign In"
        onSubmit={signin}
      />
      <NavLink
        text="Dont have an account? Sign Up instead"
        routeName="Signup"
      />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginBottom: 100,
  },
});
