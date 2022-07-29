import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '../colors';

const styles = StyleSheet.create({
  divider: {
    marginVertical: 20,
    borderBottomWidth: 1,
  },
  darkTheme: {
    borderBottomColor: Colors.darkGrey,
  },
  lightTheme: {
    borderBottomColor: Colors.lighterGrey,
  },
  blurEffect: {
    opacity: 0.2,
  },
});

const Divider = ({ theme, blur }) => {
  return (
    <View
      style={[
        styles.divider,
        theme === 'dark' ? styles.darkTheme : styles.lightTheme,
        blur ? styles.blurEffect : undefined,
      ]}
    />
  );
};

export default Divider;
