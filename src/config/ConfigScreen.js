import {faStickyNote} from '@fortawesome/free-regular-svg-icons';
import {faDoorOpen} from '@fortawesome/free-solid-svg-icons';
import {signOut} from 'auth/signOut';
import React from 'react';
import {ScrollView} from 'react-native';
import {ConfigButton} from './ConfigButton';

export function ConfigScreen() {
  return (
    <ScrollView>
      <ConfigButton text="Termos de uso" icon={faStickyNote} />
      <ConfigButton text="Política de privacidade" icon={faStickyNote} />
      <ConfigButton text="Sair" onPress={signOut} icon={faDoorOpen} />
    </ScrollView>
  );
}
