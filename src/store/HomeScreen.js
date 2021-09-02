import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {api} from 'api/api';
import {CardsListLoading} from './CardsListLoading';
import {CardsListFooter} from './CardsListFooter';
import {Card} from 'store/Card';

export function HomeScreen() {
  const [starting, setStarting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(Infinity);

  const limit = 20;

  const pageInitialIndex = (page - 1) * limit;
  const remainItems = pageInitialIndex < totalCount;

  async function getPlants() {
    if (loading || !remainItems) {
      return;
    }
    setLoading(true);

    try {
      const res = await api.get(`/plants?_page=${page}&_limit=${limit}`);
      setData([...data, ...res.data]);
      setLoading(false);
      setPage(page + 1);
      setTotalCount(res.headers['x-total-count']);
      setStarting(false);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPlants();
  }, []);

  const renderItem = ({item}) => <Card key={item.id} item={item} />;

  if (starting) {
    return (
      <FooterNavigationLayout selected={'Home'}>
        <CardsListLoading />
      </FooterNavigationLayout>
    );
  }

  return (
    <FooterNavigationLayout selected={'Home'}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={getPlants}
        onEndReachedThreshold={0.9}
        ListFooterComponent={() => (remainItems ? <CardsListFooter /> : null)}
      />
    </FooterNavigationLayout>
  );
}
