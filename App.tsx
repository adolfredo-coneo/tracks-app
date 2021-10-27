import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ScreensStackParamList } from './src/models/Screens';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import AccountScreen from './src/screens/AccountScreen';
import {
  Context as AuthContext,
  Provider as AuthProvider,
} from './src/context/AuthContext';

const Stack = createNativeStackNavigator<ScreensStackParamList>();
const Tab = createBottomTabNavigator();
const StackTrack = createNativeStackNavigator();

const TrackStackScreen = () => {
  return (
    <StackTrack.Navigator
      initialRouteName="TrackList"
      screenOptions={{ headerShown: false }}
    >
      <StackTrack.Screen name="TrackList" component={TrackListScreen} />
      <StackTrack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </StackTrack.Navigator>
  );
};

const RootNavigation = () => {
  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {state.token == null ? (
        <Stack.Navigator
          initialRouteName="Signin"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="TrackFlow" component={TrackStackScreen} />
          <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}
