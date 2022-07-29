import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TextInput from '../../components/TextInput';
import Divider from '../../components/Divider';

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    marginHorizontal: 26,
    fontSize: 16,
  },
  blurEffect: {
    opacity: 0.2,
  },
});

const PaymentInformation = ({ paymentInput, setPaymentInput, blur }) => {
  return (
    <View style={blur ? styles.blurEffect : undefined}>
      <Divider theme="light" />
      <Text style={styles.title}>Payment Information</Text>
      <TextInput
        title="Card Details"
        inputValue={paymentInput}
        setInputValue={setPaymentInput}
        keyboardType="number-pad"
        autoCorrect={false}
      />
    </View>
  );
};

export default PaymentInformation;
