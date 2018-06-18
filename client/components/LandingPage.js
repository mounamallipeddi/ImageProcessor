import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
// import { StackNavigator } from "react-navigation";
const styles = StyleSheet.create({
  buttonText: {
      textAlign: 'center',
      color: '#FFF',
      fontWeight: '700'
    },
});

export default class LandingPage extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16a085',
      elevation: null
    },
    headerLeft: null
  };
  render() {
    return <View><Text style={styles.buttonText}>OLA</Text></View>;
  }
}

AppRegistry.registerComponent('LandingPage', () => LandingPage);
