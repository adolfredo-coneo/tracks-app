import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext, useEffect } from 'react';

import { Context as AuthContext } from '../../src/context/AuthContext';
import { ScreensStackParamList } from '../models/Screens';

type Props = NativeStackScreenProps<ScreensStackParamList, 'Loading'>;

const LoadingScreen: React.FC<Props> = ({ navigation }) => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin(() => navigation.navigate('Signin'));
  }, []);

  return null;
};

export default LoadingScreen;
