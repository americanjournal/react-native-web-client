/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

// import { Touchable } from '../../components';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      values: [ 'Patriotism', 'Environment', 'Justice' ]
    };

    this._handlePress = this._handlePress.bind(this);
  }

  _handlePress() {
    console.log("Can't touched this?");
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.values.map((value) => (
          <TouchableHighlight key={value}>
            <Text>{value}</Text>
          </TouchableHighlight>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  touchable: {
    backgroundColor: '#CAE6FE'
  }
});
