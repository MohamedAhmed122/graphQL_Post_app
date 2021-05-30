import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import AppButton from '../../common/AppButton';
import {secondary} from '../../config/colors';

export default function AppModalize({modalizeRef}) {
  const navigation = useNavigation();
  return (
    <Modalize ref={modalizeRef} modalHeight={300}>
      <View>
        <Text style={styles.title}> You Need to Login Or Register</Text>
        <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
        <AppButton
          title="Register"
          color={secondary}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </Modalize>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});
