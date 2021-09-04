import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {api} from 'api';

export function InfiniteScroll({
  renderItem,
  startingComponent,
  getUrl,
  loadingFooter,
  ...rest
}) {
  const [starting, setStarting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(Infinity);

  const limit = 10;

  const pageInitialIndex = (page - 1) * limit;
  const remainItems = pageInitialIndex < totalCount;

  async function getCards() {
    if (loading || !remainItems) {
      return;
    }
    setLoading(true);

    try {
      const res = await api.get(getUrl(page, limit));
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
    getCards();
  }, []);

  if (starting) {
    return startingComponent;
  }

  return (
    <FlatList
      {...rest}
      data={data}
      renderItem={renderItem}
      onEndReached={getCards}
      onEndReachedThreshold={0.9}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => (remainItems ? loadingFooter : null)}
    />
  );
}
