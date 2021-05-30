/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {danger, gray, primary} from '../../config/colors';

export default function CommentList() {
  const img =
    'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=';

  return (
    <View style={styles.commentContainer}>
      <View style={{width: '90%'}}>
        <View style={styles.flex}>
          <Image source={{uri: img}} resizeMode="cover" style={styles.img} />
          <Text style={styles.username}>Username</Text>
        </View>
        <Text style={styles.comment}>what a cool post</Text>
        <Text style={styles.date}>12.02.20202</Text>
      </View>
      <FontAwesome name="trash" color={danger} size={25} />
    </View>
  );
}

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    borderBottomColor: gray,
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginTop: 20,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
  },
  comment: {
    marginTop: 10,
    fontSize: 20,
  },
  date: {
    color: primary,
    textAlign: 'right',
    marginRight: -40,
  },
});
