import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {mockPostText} from './mock/mockPostText';

import {LikeButton} from 'post/LikeButton';
import {Description} from 'post/Description';
import {CommentButton} from 'post/CommentButton';
import {ShowMoreButton} from 'post/ShowMoreButton';
import {UserIdentifier} from 'post/UserIdentifier';
import {ExpandableImage} from 'post/ExpandableImage';

export function Post() {
  const [expandText, setExpandText] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [numberOfLines, setNumberOfLines] = useState(undefined);

  return (
    <View style={styles.container}>
      <UserIdentifier />
      <Text style={styles.title}>Alguém sabe o nome dessa planta?</Text>
      <View style={styles.center}>
        <ExpandableImage />
      </View>
      <Description
        text={mockPostText}
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
