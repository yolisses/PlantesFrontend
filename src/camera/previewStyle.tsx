const {StyleSheet, Dimensions} = require('react-native');

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const previewStyle = StyleSheet.create({
  preview: {
    position: 'absolute',
    width,
    height,
  },
});
