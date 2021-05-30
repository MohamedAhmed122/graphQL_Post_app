import React, {useRef} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import Post from '../../components/Post';
import AppModalize from '../../components/Modalize';
import AppButton from '../../common/AppButton';
import {secondary, white} from '../../config/colors';
export default function PostsScreen() {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <View style={styles.container}>
        <AppButton title="Create Post" color={secondary} onPress={onOpen} />
      </View>
      <Post />
      <Post />
      <Post />
      <AppModalize modalizeRef={modalizeRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: white,
    width: '100%',
    height: '100%',
  },
  container: {
    width: '80%',
    marginLeft: '10%',
  },
});
