/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  ReactNativeLDClient,
  AutoEnvAttributes,
  LDProvider,
} from '@launchdarkly/react-native-client-sdk';
import {Alert} from 'react-native';

const client = new ReactNativeLDClient(
  '<INSERT_KEY_HERE>',
  AutoEnvAttributes.Enabled,
  {debug: true, withReasons: true},
);

const context = {kind: 'user', key: 'user-key-123abc'};

const App = () => {
  // call identify on App mount or later in some other component
  useEffect(() => {
    client
      .identify(context)
      .catch((e: any) => console.log(e))
      .then(() => {
        Alert.alert(
          JSON.stringify(
            client.boolVariationDetail('Test-flag', false),
            null,
            2,
          ),
        );
      });
  }, []);
  return (
    <LDProvider client={client}>
      <></>
    </LDProvider>
  );
};

export default App;
