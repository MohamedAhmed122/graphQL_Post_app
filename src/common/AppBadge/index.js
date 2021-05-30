import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {secondary, white} from '../../config/colors';

export default function AppBadge({color = secondary, title, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 95,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 7,
  },
  text: {
    fontSize: 15,
    color: white,
    fontWeight: 'bold',
  },
});
