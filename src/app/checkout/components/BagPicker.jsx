import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@rneui/themed';

import { Colors } from '../../colors';

const styles = StyleSheet.create({
  bagPickerContainer: {
    flexDirection: 'row',
    marginTop: 22,
    alignItems: 'center',
  },
  bagPicker: {
    flexDirection: 'row',
    marginLeft: 45,
    alignItems: 'center',
  },
  pickerButton: {
    borderRadius: 4,
  },
  pickerTitle: {
    color: Colors.black,
    padding: 4,
  },
  numberOfBags: {
    marginHorizontal: 14,
  },
  warningText: {
    fontSize: 11,
    color: Colors.red,
    marginTop: 4,
  }
});

const BagPicker = ({ numberOfBags, setNumberOfBags }) => {
  const shouldDisablePlusButton = numberOfBags >= 5;

  return (
    <View>
      <View style={styles.bagPickerContainer}>
        <Text>Number of bags</Text>
        <View style={styles.bagPicker}>
          <Button
            buttonStyle={styles.pickerButton}
            titleStyle={styles.pickerTitle}
            size="xs"
            title="-"
            onPress={() => setNumberOfBags(numberOfBags - 1)}
            disabled={numberOfBags <= 1}
          />
          <Text style={styles.numberOfBags}>{String(numberOfBags)}</Text>
          <Button
            buttonStyle={styles.pickerButton}
            titleStyle={styles.pickerTitle}
            size="xs"
            title="+"
            onPress={() => setNumberOfBags(numberOfBags + 1)}
            disabled={shouldDisablePlusButton}
          />
        </View>
      </View>
      {shouldDisablePlusButton ? (
        <Text style={styles.warningText}>Maximum 5 bags allowed</Text>
      ) : null}
    </View>
  );
};

export default BagPicker;
