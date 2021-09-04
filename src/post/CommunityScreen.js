import React from 'react';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {Post} from 'post/Post';
import {InfiniteScroll} from '../common/InfiniteScroll';
import {Text} from 'react-native';

export function CommunityScreen() {
  const renderItem = ({item}) => <Post key={item.id} item={item} />;

  return (
    <FooterNavigationLayout selected="Community">
      <InfiniteScroll
        renderItem={renderItem}
        startingComponent={<Text>carregando</Text>}
        getUrl={(page, limit) => `/posts?_page=${page}&_limit=${limit}`}
        loadingFooter={<Text>carregando, mas no final</Text>}
      />
    </FooterNavigationLayout>
  );
}
