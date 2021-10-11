import {faStickyNote} from '@fortawesome/free-regular-svg-icons';
import {faDoorOpen} from '@fortawesome/free-solid-svg-icons';
import {signOut} from 'auth/signOut';
import {BackButton} from 'common/BackButton';
import {CustomHeader} from 'common/CustomHeader';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {ConfigButton} from './ConfigButton';

export function ConfigScreen() {
  return (
    <View>
      <CustomHeader left={<BackButton />} title="Opções" />
      <ScrollView>
        <ConfigButton text="Termos de uso" icon={faStickyNote} />
        <ConfigButton text="Política de privacidade" icon={faStickyNote} />
        <ConfigButton text="Sair" onPress={signOut} icon={faDoorOpen} />
      </ScrollView>
    </View>
  );
}
