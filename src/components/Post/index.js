import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, Image, View} from 'react-native';
import AppBadge from '../../common/AppBadge';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {lightGray, primary, secondary} from '../../config/colors';

export default function Post() {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();
  const img =
    'https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=';
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Image source={{uri: img}} resizeMode="cover" style={styles.avatar} />
        <Text style={styles.username}>Mohamed Youssef</Text>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.desc}>
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem
        </Text>
      </View>
      <View style={styles.likeContainer}>
        <View style={styles.flex}>
          {isLiked ? (
            <AntDesign
              name="like1"
              color={secondary}
              size={20}
              onPress={() => setIsLiked(false)}
            />
          ) : (
            <AntDesign
              name="like2"
              color={secondary}
              size={20}
              onPress={() => setIsLiked(true)}
            />
          )}
          <Text style={styles.like}> 120 Likes</Text>
        </View>
        <AppBadge
          title="View"
          color={primary}
          onPress={() => navigation.navigate('Post Detail')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: lightGray,
    borderWidth: 1,
    margin: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 10,
  },
  username: {
    fontSize: 25,
    color: secondary,
  },
  desc: {
    fontSize: 18,
    width: '90%',
    marginLeft: '5%',
  },
  likeContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  like: {
    color: secondary,
  },
});
