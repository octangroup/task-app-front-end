/* eslint-disable no-alert */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Keyboard,
} from 'react-native';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  saveData = async () => {
    const {username, email, password} = this.state;
    let loginDetails = {
      username: username,
      email: email,
      password: password,
    };

    if (this.props.type !== 'Login') {
      AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

      Keyboard.dismiss();
      alert(
        'You successfully registered. Email: ' +
          email +
          ' password: ' +
          password,
      );
      this.login();
    } else if (this.props.type === 'Login') {
      try {
        loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);

        if (ld.username != null && ld.email != null && ld.password != null) {
          if (
            ld.username === username &&
            ld.email === email &&
            ld.password === password
          ) {
            alert('Go in!');
          } else {
            alert('Email and Password does not exist!');
          }
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  showData = async () => {
    let loginDetails = await AsyncStorage.getItem('loginDetails');
    let ld = JSON.parse(loginDetails);
    alert(
      'username: ' +
        ld.username +
        ' ' +
        'email: ' +
        ld.email +
        ' ' +
        'password: ' +
        ld.password,
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          onChangeText={(username) => this.setState({username})}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Username"
          placeholderTextColor="#002f6c"
          selectionColor="#fff"
          onSubmitEditing={() => this.username}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(email) => this.setState({email})}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#002f6c"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={(password) => this.setState({password})}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#002f6c"
          ref={(input) => (this.password = input)}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={this.saveData}>
            {this.props.type}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: '#eeeeee',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#4f83cc',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});