import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {api} from 'api/api';
import {Comment} from 'comment/Comment';
import {MessageInput} from 'chat/MessageInput';

export function CommentsScreen() {
  const [starting, setStarting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(Infinity);

  const limit = 20;

  const pageInitialIndex = (page - 1) * limit;
  const remainItems = pageInitialIndex < totalCount;

  const loadData = async () => {
    if (loading || !remainItems) {
      return;
    }
    setLoading(true);

    try {
      const res = await api.get(`comments?_page=${page}&_limit=${limit}`);
      setData([...data, ...res.data]);
      setLoading(false);
      setPage(page + 1);
      setTotalCount(res.headers['x-total-count']);
      setStarting(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadData();
  });

  const renderItem = ({item}) => <Comment key={item.id} item={item} />;

  // if (starting) {
  //   return <CardsListLoading />;
  // }

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        renderItem={renderItem}
        onEndReached={loadData}
        onEndReachedThreshold={0.9}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
        // ListFooterComponent={() => (remainItems ? <CardsListFooter /> : null)}
      />
      <MessageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 8},
  screen: {
    height: '100%',
  },
});
