import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TextInput from '../../components/TextInput';
import { Colors } from '../../colors';

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    marginHorizontal: 26,
    fontSize: 16,
  },
  completedContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.green,
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 24,
    paddingHorizontal: 14,
    alignItems: 'center',
  },
  titleCompleted: {
    fontSize: 16,
  },
  changeButton: {
    position: 'absolute',
    right: 10,
  },
  blurEffect: {
    opacity: 0.2,
  },
});

const PersonalDetails = ({
  nameInput,
  setNameInput,
  emailInput,
  setEmailInput,
  completed,
  setCompleted,
  blur,
}) => {
  return completed ? (
    <View
      style={[styles.completedContainer, blur ? styles.blurEffect : undefined]}>
      <Text style={styles.titleCompleted}>Personal Details:</Text>
      <Text style={styles.changeButton} onPress={setCompleted}>
        change?
      </Text>
    </View>
  ) : (
    <View>
      <Text style={styles.title}>Personal Details:</Text>
      <TextInput
        title="Name"
        inputValue={nameInput}
        setInputValue={setNameInput}
        autoCorrect={false}
      />
      <TextInput
        title="Email"
        inputValue={emailInput}
        setInputValue={setEmailInput}
        inputType="email"
        autoCorrect={false}
        autoCapitalize="none"
      />
    </View>
  );
};

export default PersonalDetails;
