import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Task from './pages/TaskForm';
import {Actions} from 'react-native-router-flux';

export default class Routes extends Component {
  tasks() {
    Actions.tasks();
  }
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
          <Scene
            key="home"
            component={Home}
            title="User Tasks"
            onRight={() => {
              this.tasks();
            }}
            rightTitle={' Add Task'}
            rightButtonTextStyle={styles.button}
          />
          <Scene key="tasks" component={Task} title="Tasks" />
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
  button: {
    color: 'white',
  },
};
