import React, {useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NextButton} from 'publish/NextButton';
import {CustomHeader} from 'publish/CustomHeader';
import {DiscardButton} from 'publish/DiscardButton';
import {TakePhotoButton} from 'publish/TakePhotoButton';
import {LocalImagesSelector} from 'publish/LocalImagesSelector';
import {PublishImagesPreview} from 'publish/PublishImagesPreview';
import {SelectImageAlbumButton} from 'publish/SelectImageAlbumButton';
import {FooterNavigationLayout} from 'navigation/FooterNavigationLayout';
import {usePublish} from 'publish/PublishContext';

function ValidatedHeader() {
  const {state} = usePublish();
  const refresh = state._localRefreshImagesPreview;

  const canContinue = useMemo(() => {
    const images = Object.keys(state.images || {});
    return !!images?.length;
  }, [refresh]);

  return (
    <CustomHeader
      title="Publicar"
      left={canContinue && <DiscardButton />}
      right={canContinue && <NextButton route="Detail" />}
    />
  );
}

export function PublishImagesScreen() {
  const [album, setAlbum] = useState({title: 'Galeria', type: 'All'});

  return (
    <>
      <FooterNavigationLayout selected="Publish">
        <ValidatedHeader />
        <LocalImagesSelector
          album={album}
          flatListHeader={() => (
            <View style={{backgroundColor: 'white'}}>
              <PublishImagesPreview />
              <View style={styles.wrapper}>
                <SelectImageAlbumButton
                  album={album}
                  setAlbum={setAlbum}
                  style={styles.button}
                />
                <TakePhotoButton style={styles.button} />
              </View>
            </View>
          )}
        />
      </FooterNavigationLayout>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
