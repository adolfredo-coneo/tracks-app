import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';

import Spacer from '../components/Spacer';
import { ScreensStackParamList, TabStackParamList } from '../models/Screens';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  text: string;
  routeName: keyof ScreensStackParamList | keyof TabStackParamList;
}

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  StackNavigationProp<ScreensStackParamList>
>;

const NavLink: React.FC<Props> = ({ text, routeName }) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <Spacer>
      <TouchableOpacity
        onPress={() => navigation.navigate(routeName)}
        style={styles.link}
      >
        <Text style={styles.linkText}>{text}</Text>
      </TouchableOpacity>
    </Spacer>
  );
};

export default NavLink;

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
  },
  linkText: {
    color: '#2980b9',
  },
});
