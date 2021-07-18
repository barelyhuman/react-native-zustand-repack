import React from 'react';
import {SafeAreaView, View} from 'react-native';

// RNPaper with MaterialCommunityIcons already setup for you
import {Button, TextInput, HelperText} from 'react-native-paper';

// Support module resolver, you can change the configurations in babel.config.js
import {Padding} from 'components/padding';
import {useEmail} from 'store/global';

const App = () => {
  // Uses a simple store as an example, in a real world scenario
  // You'd use the global or zustand for state that needs to be
  // shared accross multiple screens, like user profile data
  const emailValue = useEmail(state => state.email);
  const setEmail = useEmail(state => state.setEmail);

  return (
    <>
      <SafeAreaView>
        <Padding all={2}>
          <TextInput
            autoCapitalize="none"
            value={emailValue}
            onChangeText={text => setEmail(text)}
          />
          <HelperText>{emailValue}</HelperText>

          <Padding y={1}>
            <Button mode="contained" icon="camera">
              Button
            </Button>
          </Padding>
        </Padding>
      </SafeAreaView>
    </>
  );
};

export default App;
