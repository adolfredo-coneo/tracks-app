import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Account Details</Text>
        <Spacer>
          <Button title="Sign Out" onPress={signout} />
        </Spacer>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
