import React from 'react';
import { View, Text, Button } from 'react-native';

const Signin = props => {
  const { navigation } = props;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Signin!</Text>
      <Button title='Signup' onPress={() => navigation.push('Signup')} />
    </View>
  );
};

export default Signin;
