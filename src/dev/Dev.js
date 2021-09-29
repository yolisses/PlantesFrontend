import {auth} from 'auth/auth';
import {signOut} from 'auth/signOut';
import React from 'react';
import {Button, Text, View} from 'react-native';

export function Dev() {
  return (
    <View>
      <Text>{JSON.stringify(auth.token)}</Text>
      <Text>{JSON.stringify('' + auth.user)}</Text>
      <Text>{JSON.stringify('' + auth.userId)}</Text>
      <Button title="sair" onPress={signOut} />
    </View>
  );
}
