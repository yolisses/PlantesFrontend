import React from 'react';
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import {UserRoundImage} from 'common/UserRoundImage';
import {signOut} from 'auth/oauth';

export function UserPage() {
  return (
    <ScrollView>
      <View style={styles.imageNameContainer}>
        <UserRoundImage size={100} />
      </View>
      <Button title="sign out" onPress={signOut} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageNameContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
  },
});
