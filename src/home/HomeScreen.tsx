import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';

import {api} from 'api/api';
import {Card} from 'home/Card';
import {SendingList} from 'send/SendingList';
import {formatSearch} from 'search/formatSearch';
import {searchOptions} from 'search/searchOptions';
import {LocationOption} from 'home/LocationOption';
import {FooterNavigation} from 'navigation/FooterNavigation';
import {SearchCustomHeader} from 'search/SearchCustomHeader';

export function HomeScreen() {
  const [data, setData] = useState([]);

  async function fetchProjects() {
    const res = await api.get('plants/' + 1, formatSearch(searchOptions));
    setData(res.data);
    return res.data;
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <View style={{flex: 1}}>
        <SearchCustomHeader />
        <FlatList
          numColumns={2}
          data={data}
          onEndReachedThreshold={0.4}
          ListHeaderComponent={
            <>
              <LocationOption />
              <SendingList />
            </>
          }
          renderItem={({item}) => <Card item={item} />}
        />
      </View>
      <FooterNavigation selected="Home" />
    </>
  );
}
