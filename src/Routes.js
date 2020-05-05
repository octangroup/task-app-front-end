import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

export default class Routes extends Component {
  render() {
    return (
      <Router
        barButtonIconStyle={styles.barButtonIconStyle}
        hideNavBar={false}
        navigationBarStyle={styles.nav}
        titleStyle={styles.title}>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signup" component={Signup} title="Sign up" />
          <Scene key="home" component={Home} title="User Tasks" />
        </Stack>
      </Router>
    );
  }
}

const styles = {
  barButtonIconStyle: {
    tintColor: 'white',
  },
  nav: {
    backgroundColor: '#1565c0',
  },
  title: {
    color: 'white',
  },
};
