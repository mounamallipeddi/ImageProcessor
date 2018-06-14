import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button
} from 'react-native';
import styles from '../public/style';

export default class Secured extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> Welcome </Text>
                <View style={styles.welcome} />
                <Button style= {styles.welcome} onPress={this.props.onLogoutPress} title="Logout" />
            </View>
         );
    }
}
