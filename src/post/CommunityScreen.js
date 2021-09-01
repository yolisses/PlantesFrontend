import React from 'react';
import {ScrollView} from 'react-native';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {Post} from 'post/Post';

export function CommunityScreen() {
  return (
    <FooterNavigationLayout selected="Community">
      <ScrollView>
        {Object.keys([...Array(10)]).map(item => (
          <Post key={item} />
        ))}
      </ScrollView>
    </FooterNavigationLayout>
  );
}
