import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FooterNavigation} from 'components/FooterNavigation';
import {Card} from 'components/Card';
import firestore from '@react-native-firebase/firestore';
import {useUserContext} from 'contexts/userContext';
import {useSendingPostContext} from 'contexts/sendingPostContext';
import {SendingPost} from 'components/SendingPost';

export function UserPlantsScreen() {
  const [posts, setPosts] = useState([]);

  const {user} = useUserContext();

  const {sendings} = useSendingPostContext();

  useEffect(
    () =>
      firestore()
        .collection('plants')
        .where('user', '==', user.uid)
        .onSnapshot(newPosts => setPosts(newPosts.docs)),
    [user],
  );

  const isNewer = (itemA, itemB) =>
    itemA.data().createdAt < itemB.data().createdAt;

  return (
    <View style={{height: '100%'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {Object.values(sendings).map(sending => (
            <SendingPost key={sending} sending={sending} />
          ))}
          {posts.sort(isNewer).map(item => (
            <Card key={item.id} item={item.data()} fraction={3} />
          ))}
        </View>
      </ScrollView>
      <FooterNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
