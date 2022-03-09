import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Svg } from 'react-native-svg'

export default function Onboardscreen () {
  return (
    <View style={OnboardscreenStyles.Onboardscreen}>
      <View style={OnboardscreenStyles.onboardscreenimage} />
      <View style={OnboardscreenStyles.onboardletter}>
        <Svg id='Vector' />
      </View>
      <Text style={OnboardscreenStyles.Thebestsushirestaurantrightinfrontofyourdoorsteps}>
        The best sushi restaurant right in front
of your doorsteps
      </Text>
      <Logo />
      <GetStartedButton />
    </View>
  )
}

const OnboardscreenStyles = StyleSheet.create({
  Onboardscreen: {
    width: 23.44,
    height: 50.75,
    backgroundColor: '#ffffff',
  },
  onboardscreenimage: {
    width: 23.44,
    height: 50.75,
    backgroundColor: '#25251c',
  },
  onboardletter: {
    margin: '6.88 32.56',
    width: 9.69,
    height: 2.75,
  },
  Thebestsushirestaurantrightinfrontofyourdoorsteps: {
    margin: '3.88 37.06',
    width: 15.63,
    height: 2.5,
    color: 'rgba(252, 252, 250, 0.8)',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 0.81,
    fontWeight: '500',
    lineHeight: 0.95,
    textAlign: 'center',
  },

})

function Logo () {
  return (
    <View style={LogoStyles.Logo}>
      <Svg style={LogoStyles.Vector} id='Vector' />
    </View>
  )
}

const LogoStyles = StyleSheet.create({
  Logo: {
    margin: '6.13 21.06',
    width: 11.19,
    height: 3.31,
  },
  Vector: {
    margin: '0.02 0.02',
    width: '99.65%',
    height: '99.25%',
    backgroundColor: '#fcfcfa',
  },

})

function GetStartedButton () {
  return (
    <View style={GetStartedButtonStyles.GetStartedButton}>
      <GetStartedButton style={GetStartedButtonStyles.GetStartedButton} />
    </View>
  )
}

const GetStartedButtonStyles = StyleSheet.create({
  GetStartedButton: {
    margin: '4 11.88',
    width: 14.31,
    height: 4.06,
  },
  GetStartedButton: {
    width: '100%',
    height: '100%',
  },
  Rectangle7: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fcfcfa',
    borderRadius: 0.94,
    boxShadow: 0 1 3.75 'rgba(37, 37, 28, 0.15)',
  },
  GetStarted: {
    margin: '3.88 1.19',
    width: '45.41%',
    height: '41.54%',
    color: 'rgba(37, 37, 28, 0.9)',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 1.13,
    fontWeight: '600',
    lineHeight: 1.32,
    textAlign: 'center',
  },

})
