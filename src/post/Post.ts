import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {LikeButton} from 'post/LikeButton';
import {Description} from 'post/Description';
import {CommentButton} from 'post/CommentButton';
import {ShowMoreButton} from 'post/ShowMoreButton';
import {UserIdentifier} from 'post/UserIdentifier';
import {ImagesSwiper} from 'show/ImagesSwiper';

export function Post({item}) {
  const [expandText, setExpandText] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [numberOfLines, setNumberOfLines] = useState(undefined);

  const {title, text, images, user} = item;

  return (
    <View style={styles.container}>
      <UserIdentifier item={user} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.center}>
        <ImagesSwiper images={images} />
      </View>
      <Description
        text={text}
        numberOfLines={numberOfLines}
        setNumberOfLines={setNumberOfLines}
        showText={expandText}
        showMoreButton={showMoreButton}
        setShowMoreButton={setShowMoreButton}
      />
      <View style={styles.bottomWrapper}>
        <LikeButton />
        <CommentButton />
        <View style={styles.buttonWrapper}>
          <ShowMoreButton
            showMoreButton={showMoreButton}
            onPress={() => setExpandText(showText => !showText)}
            active={expandText}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    paddingBottom: 2,
    paddingTop: 5,
    overflow: 'hidden',
  },
  bottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  center: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    padding: 3,
    fontSize: 18,
  },
});
