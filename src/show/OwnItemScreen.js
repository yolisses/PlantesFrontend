import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {Title} from './Title';
import {Section} from './Section';
import {UserLink} from './UserLink';
import {TagsList} from './TagsList';
import {Secondary} from './Secondary';

import {Description} from 'post/Description';
import {ImagesSwiper} from 'show/ImagesSwiper';
import {FloatingButton} from 'show/FloatingButton';
import {AvailabilityInfo} from 'show/AvailabilityInfo';
import {useUserById} from 'common/UsersByIdContext';
import {TextIconButton} from 'comment/TextIconButton';
import {faEdit, faTrashAlt} from '@fortawesome/free-regular-svg-icons';

export function OwnItemScreen({route}) {
  const {preImage, item} = route.params;

  const {getUserById} = useUserById();
  const user = getUserById(item?.userId);

  return (
    <View>
      <FloatingButton />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#fff'}}>
        <ImagesSwiper images={item?.images} preImage={preImage} />
        {/* Must be there */}
        {/* <View>
          <View style={styles.likeWrapper}>
            <LikeButton />
          </View>
        </View> */}
        <View style={{paddingHorizontal: 5}}>
          <Section>
            <Title text={item?.name} />
            <View style={styles.line}>
              <AvailabilityInfo item={item} />
              {!!item.amount && (
                <Secondary text={item.amount + ' disponível'} />
              )}
            </View>
          </Section>
          <Section>
            <UserLink id={item?.userId} />
            <View style={[styles.line, {paddingLeft: 5}]}>
              <TextIconButton
                text="Remover"
                icon={faTrashAlt}
                style={styles.button}
              />
              <TextIconButton
                text="Editar"
                icon={faEdit}
                style={styles.button}
              />
            </View>
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
const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 10,
    marginRight: 10,
  },
  likeWrapper: {
    position: 'absolute',
    right: 0,
    paddingTop: 10,
    paddingLeft: 50,
    top: -23,
    flexDirection: 'row-reverse',
  },
});
