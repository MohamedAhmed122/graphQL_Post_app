import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import Post from '../../components/Post';
import AppButton from '../../common/AppButton';
import {secondary, white} from '../../config/colors';
export default function PostsScreen() {
  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <View style={styles.container}>
        <AppButton title="Create Post" color={secondary} />
      </View>
      <Post />
      <Post />
      <Post />
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
