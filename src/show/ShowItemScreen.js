import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {Title} from './Title';
import {Section} from './Section';
import {UserLink} from './UserLink';
import {TagsList} from './TagsList';
import {Secondary} from './Secondary';
import {EditItemButton} from './EditItemButton';

import {auth} from 'auth/auth';
import {Description} from 'post/Description';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {FloatingButton} from 'show/FloatingButton';
import {WhatsappButton} from 'messages/WhatsappButton';
import {AvailabilityInfo} from 'show/AvailabilityInfo';
import {SendMessageButton} from 'messages/SendMessageButton';
import {InstagramButton} from 'messages/InstagramButton';

export function ShowItemScreen({route}) {
  const {preImage, item} = route.params;
  return (
    <View style={styles.screen}>
      <FloatingButton />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#fff'}}>
        <ImagesSwiper images={item?.images} preImage={preImage} />
        <View style={{paddingHorizontal: 5}}>
          <Section>
            <Title text={item?.name} />
            <AvailabilityInfo item={item} />
            {!!item.amount && <Secondary text={item.amount + ' disponível'} />}
          </Section>
          <Section>
            <UserLink id={item?.userId} />
            {item.userId !== auth.userId ? (
              <EditItemButton item={item} style={styles.button} />
            ) : (
              <>
                <WhatsappButton />
                <InstagramButton />
              </>
            )}
          </Section>
          {!!(item?.tags && item.tags.length) && (
            <Section name="Detalhes">
              <TagsList tags={item?.tags || []} />
            </Section>
          )}
          {item?.description ? (
            <Section name="Descrição">
              <Description text={item?.description} />
            </Section>
          ) : (
            <Text style={styles.notProvided}>Sem descrição</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({});
