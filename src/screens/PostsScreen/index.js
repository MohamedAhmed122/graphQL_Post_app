import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import Post from '../../components/Post';
import {white} from '../../config/colors';
export default function PostsScreen() {
  return (
    <View style={styles.screen}>
      <SafeAreaView />
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
});
