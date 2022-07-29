import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@rneui/themed';

import Divider from '../../components/Divider';
import { Colors } from '../../colors';

const styles = StyleSheet.create({
  footer: {
    marginVertical: 26,
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
  },
  subtext: {
    fontSize: 12,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  titleStyle: {
    color: Colors.black,
    padding: 4,
  },
  numberOfBags: {
    marginHorizontal: 14,
  },
  buttonStyle: {
    borderRadius: 4,
    width: 100,
  },
  blurEffect: {
    opacity: 0.2,
  },
});

const CheckoutFooter = ({
  totalPrice,
  numberOfBags,
  buttonTitle,
  onPress,
  disableButton,
  blur,
}) => {
  return (
    <View style={[styles.footer, blur ? styles.blurEffect : undefined]}>
      <Divider theme="dark" blur={blur} />
      <View style={styles.container}>
        <View>
          {/* TODO: Would abstract this in a utility function and add unit tests */}
          <Text style={styles.subtext}>
            {`${numberOfBags} bag${numberOfBags > 1 ? 's' : ''}`}
          </Text>
          <Text style={styles.boldText}>{String(`$${totalPrice}`)}</Text>
        </View>
        {/* TODO: Didn't have time to add the error state scenario */}
        <Button
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title={blur ? '...' : buttonTitle}
          onPress={onPress}
          disabled={disableButton}
        />
      </View>
    </View>
  );
};

export default CheckoutFooter;
