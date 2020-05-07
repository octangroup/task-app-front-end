import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, CheckBox} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: false,
      startDate: '',
      endDate: '',
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={styles.text}> Name</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={(name) => this.setState({name})}
          />
          <Text style={styles.text}>Status</Text>
          <CheckBox
            value={this.state.status}
            onChange={(status) => this.setState({status})}
          />
          <Text style={styles.text}> Start Date</Text>
          <DatePicker
            value={this.props.value}
            date={this.state.startDate}
            style={styles.date}
            format="YYYY-MM-DD"
            minDate="15-01-2019"
            maxDate="20-12-2022"
            onDateChange={(startDate) => this.setState({date: startDate})}
          />
          <Text style={styles.text}> End Date</Text>
          <DatePicker
            value={this.props.value}
            date={this.state.endDate}
            style={styles.date}
            format="YYYY-MM-DD"
            minDate="15-01-2019"
            maxDate="20-12-2022"
            onDateChange={(endDate) => this.setState({date: endDate})}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    marginLeft: 12,
    marginRight: 12,
    height: 40,
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
    paddingTop: 0,
  },
  text: {
    margin: 0,
    paddingLeft: 12,
    padding: 0,
  },
  date: {
    width: 350,
    marginLeft: 12,
    marginRight: 12,
    paddingTop: 1,
  },
});
