import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, StatusBar } from 'react-native';
import Login from './client/components/login';
import Register from './client/components/register';
import ForgetPassword from './client/components/forgetPasswrd';
import { StackNavigator } from 'react-navigation';
import LandingPage from './client/components/LandingPage';

class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16a085',
      elevation: null
    },
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#16a085" />
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

 const App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register'
    }
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      title: 'ForgetPassword'
    }
  },
  LandingPage: {
    screen: LandingPage,
    navigationOptions: {
      title: 'LandingPage'
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default App;
AppRegistry.registerComponent(App, () => App );

