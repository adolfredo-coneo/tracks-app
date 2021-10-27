import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import Spacer from '../components/Spacer';

interface Props {
  headerText: string;
  errorMessage: string;
  submitButtonLabel: string;
  onSubmit: (email: string, password: string) => void;
}

const AuthForm: React.FC<Props> = ({
  headerText,
  errorMessage,
  submitButtonLabel,
  onSubmit,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer>
        <Text h2>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer />
      {errorMessage ? (
        <Text h4 style={styles.error}>
          {errorMessage}
        </Text>
      ) : null}
      <Spacer>
        <Button title={submitButtonLabel} onPress={() => onSubmit(email, password)} />
      </Spacer>
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginLeft: 15,
  },
});
