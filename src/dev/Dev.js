import React from 'react';
import {Button, Text, View} from 'react-native';
import {useQuery, useQueryClient} from 'react-query';
// import {ReactQueryDevtools} from 'react-query/devtools';

// export function Dev() {
//   const {isLoading, error, data, isFetching} = useQuery('repoData', () =>
//     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
//       res.json(),
//     ),
//   );

//   if (isLoading) {
//     return 'Loading...';
//   }

//   if (error) {
//     return 'An error has occurred: ' + error.message;
//   }

//   return (
//     <View>
//       {/* <Text>{data.name}</Text>
//       <Text>{data.description}</Text>
//       <Text>👀 {data.subscribers_count}</Text>
//       <Text>✨ {data.stargazers_count}</Text>
//       <Text>🍴 {data.forks_count}</Text>
//       <Text>{isFetching ? 'Updating...' : ''}</Text> */}
//       {/* <ReactQueryDevtools initialIsOpen /> */}
//     </View>
//   );
// }

async function getData() {
  return await new Promise(resolve =>
    setTimeout(
      () => resolve({text: 'oi, eu sou o Goku!' + Math.random()}),
      1000,
    ),
  );
}

export function Dev() {
  const queryClient = useQueryClient();
  const {data, isLoading, isFetching} = useQuery('coisa', getData);

  function onPress() {
    queryClient.invalidateQueries('coisa');
  }

  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
      {isFetching && <Text>Loading...</Text>}
      <Button title="invalidate" onPress={onPress} />
    </View>
  );
}
