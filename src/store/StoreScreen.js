import React from 'react';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

import {Card} from 'store/Card';
import {CardsListFooter} from './CardsListFooter';
import {CardsListLoading} from './CardsListLoading';
import {InfiniteScroll} from 'common/InfiniteScroll';

export function StoreScreen() {
  const renderItem = ({item}) => <Card key={item.id} item={item} />;

  return (
    <FooterNavigationLayout selected={'Home'}>
      <InfiniteScroll
        numColumns={2}
        renderItem={renderItem}
        loadingFooter={<CardsListFooter />}
        startingComponent={<CardsListLoading />}
        getUrl={(page, limit) => `/cards?_page=${page}&_limit=${limit}`}
      />
    </FooterNavigationLayout>
  );
}
