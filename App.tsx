import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

import { ScreensStackParamList } from './src/models/Screens';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import AccountScreen from './src/screens/AccountScreen';
import {
  Context as AuthContext,
  Provider as AuthProvider,
} from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';

const Stack = createNativeStackNavigator<ScreensStackParamList>();
const Tab = createBottomTabNavigator();
const StackTrack = createNativeStackNavigator();

const TrackStackScreen = () => {
  return (
    <StackTrack.Navigator initialRouteName="TrackList">
      <StackTrack.Screen
        options={{ headerTitle: 'Tracks' }}
        name="TrackList"
        component={TrackListScreen}
      />
      <StackTrack.Screen
        options={{ headerBackTitle: 'Track List', headerTitle: '' }}
        name="TrackDetail"
        component={TrackDetailScreen}
      />
    </StackTrack.Navigator>
  );
};

const RootNavigation = () => {
  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {state.token == null ? (
        <Stack.Navigator
          initialRouteName="Loading"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Loading" component={LoadingScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="TrackFlow"
            options={{
              title: 'Track',
              tabBarIcon: () => <FontAwesome name="map" size={20} />,
            }}
            component={TrackStackScreen}
          />
          <Tab.Screen
            name="TrackCreate"
            options={{
              title: 'Add Track',
              tabBarIcon: () => <FontAwesome name="plus" size={20} />,
            }}
            component={TrackCreateScreen}
          />
          <Tab.Screen
            name="Account"
            options={{
              tabBarIcon: () => <FontAwesome name="gear" size={20} />,
            }}
            component={AccountScreen}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <LocationProvider>
        <TrackProvider>
          <AuthProvider>
            <RootNavigation />
          </AuthProvider>
        </TrackProvider>
      </LocationProvider>
    </SafeAreaProvider>
  );
}
