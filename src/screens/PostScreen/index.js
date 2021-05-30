/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import CommentList from '../../components/CommentList';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppInput from '../../common/AppInput';
import {danger, gray, secondary} from '../../config/colors';

export default function PostScreen() {
  const img =
    'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=';

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.flex}>
          <Image source={{uri: img}} resizeMode="cover" style={styles.image} />
          <Text style={styles.username}>Mohamed Youssef</Text>
        </View>
        <FontAwesome name="trash" color={danger} size={23} />
      </View>
      <Text style={styles.body}>
        Body of Post Body of Post Body of Post Body of PostBody of Post Body of
        Post Body of Post
      </Text>
      <View>
        <View style={styles.CommentContainer}>
          <Text style={styles.title}>Write Comment</Text>
          <View style={styles.commentInput}>
            <View style={{width: '90%'}}>
              <AppInput
                placeholder="write Comment..."
                Icon={() => (
                  <FontAwesome
                    name="angellist"
                    color="gray"
                    size={21}
                    style={{marginRight: 10}}
                  />
                )}
              />
            </View>
            <Ionicons
              name="send"
              color={secondary}
              size={25}
              style={{marginTop: 20}}
            />
          </View>
        </View>
        <CommentList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  username: {
    fontSize: 20,
    color: secondary,
  },
  body: {
    width: '90%',
    marginLeft: '5%',
    margin: 10,
    fontSize: 21,
    // textAlign: 'start',
    lineHeight: 30,
  },
  CommentContainer: {
    borderTopColor: gray,
    borderTopWidth: 2,
    paddingTop: 29,
  },
  title: {
    fontWeight: 'bold',
    color: secondary,
    fontSize: 20,
    marginLeft: 20,
  },
  commentInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
