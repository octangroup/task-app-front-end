import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

export default class App extends Component   {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#002f6c" 
          barStyle="light-content"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});