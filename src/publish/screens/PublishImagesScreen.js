import React, {useRef} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import {LocalImagesSelector} from './LocalImagesSelector';
import {ImagesSwiper} from '../../show/ImagesSwiper';
import {FooterNavigationLayout} from '../../navigation/FooterNavigationLayout';
import {faAngleDown, faCamera} from '@fortawesome/free-solid-svg-icons';
import {LightButton} from '../../common/LightButton';
import {useNavigation} from '@react-navigation/native';
import {useImageGroup} from '../../camera/ImageGroupContext';
import {Modalize} from 'react-native-modalize';

export function PublishImagesScreen() {
  const {images} = useImageGroup();
  const layout = [
    {id: 0, data: []},
    {id: 1, data: ['images']},
  ];
  const {navigate} = useNavigation();

  const modalRef = useRef();
  return (
    <FooterNavigationLayout selected="Publish">
      <View>
        <SectionList
          sections={layout}
          stickyHeaderIndices={[1]}
          stickySectionHeadersEnabled
          renderSectionHeader={({section}) => {
            if (section.id === 0) {
              return (
                <View style={{backgroundColor: 'white'}}>
                  <ImagesSwiper images={images} />
                </View>
              );
            } else {
              return (
                <View style={styles.wrapper}>
                  <LightButton
                    icon={faAngleDown}
                    text="Galeria"
                    style={styles.button}
                    onPress={() => {
                      modalRef.current?.open();
                    }}
                  />
                  <LightButton
                    icon={faCamera}
                    text="Tirar foto"
                    style={styles.button}
                    iconColor={'#090'}
                    onPress={() => navigate('Camera')}
                  />
                </View>
              );
            }
          }}
          renderItem={() => <LocalImagesSelector />}
        />

        <ImagesSwiper />
        <Modalize
          ref={modalRef}
          onOverlayPress={() => {
            modalRef.current?.close();
          }}>
          <Text>oi</Text>
          <Text>oi</Text>
          <Text>oi</Text>
          <Text>oi</Text>
          <Text>oi</Text>
        </Modalize>
      </View>
    </FooterNavigationLayout>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    elevation: 0,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
});
