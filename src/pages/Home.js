import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class Home extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'red',
  },
});
