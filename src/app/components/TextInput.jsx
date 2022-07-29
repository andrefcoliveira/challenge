import React from 'react';
import { View, StyleSheet, Text, TextInput as RNTextInput } from 'react-native';

import { Colors } from '../colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 26,
  },
  title: {
    marginBottom: 4,
  },
  input: {
    borderColor: Colors.lightGrey,
    width: '70%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    marginBottom: 16,
  },
  blurEffect: {
    opacity: 0.2,
  },
});

const TextInput = ({ title, inputValue, setInputValue, inputType, blur }) => {
  return (
    <View style={[styles.container, blur ? styles.blurEffect : undefined]}>
      <Text style={styles.title}>{title}</Text>
      <RNTextInput
        style={styles.input}
        onChangeText={value => setInputValue(value)}
        value={inputValue}
        keyboardType={inputType === 'email' ? 'email-address' : 'default'}
      />
    </View>
  );
};

export default TextInput;
