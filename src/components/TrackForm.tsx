import React, { useContext } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';

import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  console.log(locations.length);

  return (
    <View>
      <Spacer>
        <Input
          placeholder="Enter Name"
          onChangeText={changeName}
          value={name}
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
    </View>
  );
};

export default TrackForm;
