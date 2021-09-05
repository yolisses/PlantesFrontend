import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {SquareImage} from 'common/SquareImage';

export function SendingPost({sending}) {
  const {task, imageURI} = sending;

  const [percentage, setPercentage] = useState(null);

  useEffect(() => {
    task.on('state_changed', snapshot => {
      setPercentage((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    });
  }, []);

  return (
    <View>
      <SquareImage uri={imageURI} fraction={3} offset={1} />
      <View style={styles.sendingWarn}>
        <Text style={styles.sendingWarnText}>Enviando </Text>
        <Text style={styles.sendingWarnText}>
          {percentage ? Math.floor(percentage) + '%' : ''}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  emphasis: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'blue',
  },
  sendingWarn: {
    alignItems: 'center',
    padding: 3,
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#0006',
    bottom: 0,
    marginBottom: 2,
    justifyContent: 'space-between',
  },
  sendingWarnText: {
    color: 'white',
  },
});
