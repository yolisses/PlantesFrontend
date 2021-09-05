import React from 'react';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';

import {Card} from 'store/Card';
import {CardsListFooter} from './CardsListFooter';
import {CardsListLoading} from './CardsListLoading';
import {InfiniteScroll} from 'common/InfiniteScroll';

export function StoreScreen() {
  return (
    <FooterNavigationLayout selected={'Home'}>
      <InfiniteScroll
        numColumns={2}
        loadingFooter={<CardsListFooter />}
        startingComponent={<CardsListLoading />}
        renderItem={({item}) => <Card key={item.id} item={item} />}
        getUrl={(page, limit) => `/cards?_page=${page}&_limit=${limit}`}
      />
    </FooterNavigationLayout>
  );
}
