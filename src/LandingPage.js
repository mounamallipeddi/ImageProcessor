import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
//import { StackNavigator } from "react-navigation";
export default class LandingPage extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16a085',
      elevation: null
    },
    headerLeft: null
  };
  render() {
    return <Text style={styles.buttonText}>OLA</Text>;
  }
}

const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
      },
});

AppRegistry.registerComponent('LandingPage', () => LandingPage);
