import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Appearance,
} from 'react-native';

// TODO: Couldn't make the BlurView work, also doesn't work on Android, so had to use opacity
//import { BlurView } from 'expo-blur';

import Divider from '../components/Divider';
import CheckoutFooter from './components/CheckoutFooter';
import PersonalDetails from './components/PersonalDetails';
import PaymentInformation from './components/PaymentInformation';
import BagPicker from './components/BagPicker';
import { CheckoutSteps, CheckoutVariables } from './constants';
import { Colors } from '../colors';

const { width, height } = Dimensions.get('window');

// TODO: Move all arbitrary size values to a proper mapped dimensions constants file
const styles = StyleSheet.create({
  bookingPlacedContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingPlacedText: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  placingBookingText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey,
    width: width,
    height: height,
  },
  contentContainer: {
    margin: 26,
  },
  blurEffect: {
    opacity: 0.2,
  },
  subtext: {
    fontSize: 12,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

// TODO: Ideally, this component should be a screen, I would have created the project with TypeScript,
//  would also added accessibility, but due to time constraints, it was not possible.
const Checkout = () => {
  // TODO: Probably would move most of this logic to custom hooks
  const [checkoutStep, setCheckoutStep] = useState(CheckoutSteps.selectBags);
  const [numberOfBags, setNumberOfBags] = useState(1);
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [paymentInput, setPaymentInput] = useState('');
  const [personalDetailsCompleted, setPersonalDetailsCompleted] =
    useState(false);
  const totalPrice = parseFloat(
    String(CheckoutVariables.basePrice * numberOfBags),
  ).toFixed(2);
  const footerButtonTitle =
    checkoutStep === CheckoutSteps.paymentInformation ? 'Book' : 'Next';
  const shouldBlur = checkoutStep === CheckoutSteps.placingBooking;

  //TODO: Definitively to be moved to a utility function and add unit tests
  const shouldDisableButton = () => {
    if (checkoutStep === CheckoutSteps.selectBags) {
      return false;
    }

    if (checkoutStep === CheckoutSteps.personalDetails) {
      return nameInput === '' || emailInput === '';
    }

    if (checkoutStep === CheckoutSteps.paymentInformation) {
      return paymentInput === '' || paymentInput.length < 16;
    }

    return true;
  };

  const disableButton = shouldDisableButton();

  const handleSetPersonalDetailsCompleted = () => {
    setPersonalDetailsCompleted(!personalDetailsCompleted);
    setCheckoutStep(CheckoutSteps.personalDetails);
  };

  const handleOnPress = () => {
    switch (checkoutStep) {
      case CheckoutSteps.selectBags:
        setCheckoutStep(CheckoutSteps.personalDetails);
        break;
      case CheckoutSteps.personalDetails:
        setPersonalDetailsCompleted(true);
        setCheckoutStep(CheckoutSteps.paymentInformation);
        break;
      case CheckoutSteps.paymentInformation:
        setCheckoutStep(CheckoutSteps.placingBooking);
        setTimeout(() => setCheckoutStep(CheckoutSteps.bookingPlaced), 3000);
        break;
    }
  };

  const renderPersonalDetails = () => {
    if (checkoutStep === CheckoutSteps.selectBags) {
      return null;
    }

    return (
      <PersonalDetails
        nameInput={nameInput}
        setNameInput={setNameInput}
        emailInput={emailInput}
        setEmailInput={setEmailInput}
        completed={personalDetailsCompleted}
        setCompleted={handleSetPersonalDetailsCompleted}
        blur={shouldBlur}
      />
    );
  };

  const renderPaymentInformation = () => {
    if (
      checkoutStep === CheckoutSteps.selectBags ||
      checkoutStep === CheckoutSteps.personalDetails
    ) {
      return null;
    }

    return (
      <PaymentInformation
        paymentInput={paymentInput}
        setPaymentInput={setPaymentInput}
        blur={shouldBlur}
      />
    );
  };

  if (checkoutStep === CheckoutSteps.bookingPlaced) {
    return (
      <View style={styles.bookingPlacedContainer}>
        <Text style={styles.bookingPlacedText}>Booking</Text>
        <Text style={styles.bookingPlacedText}>Placed!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {shouldBlur ? (
        <View style={styles.overlay}>
          <Text style={styles.placingBookingText}>Placing</Text>
          <Text style={styles.placingBookingText}>Booking</Text>
          <Text style={styles.placingBookingText}>...</Text>
        </View>
      ) : null}
      <StatusBar
        barStyle={
          Appearance.getColorScheme() === 'dark'
            ? 'dark-content'
            : 'light-content'
        }
      />
      <View
        style={[
          styles.contentContainer,
          shouldBlur ? styles.blurEffect : undefined,
        ]}>
        <Text style={styles.subtext}>Booking storage at:</Text>
        <Text style={styles.boldText}>Cody's Cookie Store</Text>
        <BagPicker
          numberOfBags={numberOfBags}
          setNumberOfBags={setNumberOfBags}
        />
      </View>
      <Divider theme="light" blur={shouldBlur} />
      {renderPersonalDetails()}
      {renderPaymentInformation()}
      <CheckoutFooter
        totalPrice={totalPrice}
        numberOfBags={numberOfBags}
        buttonTitle={footerButtonTitle}
        onPress={handleOnPress}
        disableButton={disableButton}
        blur={shouldBlur}
      />
    </SafeAreaView>
  );
};

export default Checkout;
