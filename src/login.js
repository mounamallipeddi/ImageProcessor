

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import styles from '../public/style';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
      <Text
          style={styles.welcome}>
          LOGIN
      </Text>
      <TextInput style={styles.welcome} placeholder="Username" />
      <TextInput style={styles.welcome} placeholder="Password" />
      <View style={styles.welcome} />
      <Button
              onPress={this.props.onLoginPress}
              title="SUBMIT"
          />
      </View>
    );
  }
}

