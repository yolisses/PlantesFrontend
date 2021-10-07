import React, {Fragment, useRef} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ItemInfo} from 'show/ItemInfo';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {FloatingButton} from 'show/FloatingButton';
import {AvailabilityInfo} from 'show/AvailabilityInfo';
import {EditItemButton} from './EditItemButton';
import {auth} from 'auth/auth';
import {SendMessageButton} from 'messages/SendMessageButton';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {width} from 'utils/width';
import {TagsList} from './TagsList';
import {UserLink} from './UserLink';
import {StartConversationAlert} from './StartConversationAlert';
import {LoadingAvailabilityInfo} from './LoadingAvailabilityInfo';
import {useAlert} from 'alert/AlertContext';
import {SectionMarker} from './SectionMarker';
import {Title} from './Title';
import {Section} from './Section';
import {Secondary} from './Secondary';
import {Description} from 'post/Description';

export function ShowItemScreen({route}) {
  const {preImage, item} = route.params;

  const options = {
    donate: item.donate,
    swap: item.swap,
    price: item.price,
  };

  const translation = entry => {
    return {
      donate: 'Doação',
      swap: 'Trocar',
      price: 'R$' + Number(entry[1]).toFixed(2),
    }[entry[0]];
  };

  const getSeparator = (index, array) => {
    switch (index) {
      case 0:
        return null;
      case array.length - 1:
        return <Text style={styles.secondary}> ou </Text>;
      default:
        return <Text style={styles.secondary}>, </Text>;
    }
  };

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
              <SendMessageButton />
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
