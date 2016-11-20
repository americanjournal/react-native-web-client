/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

// import { Touchable } from '../../components';

import { Values } from '../Values';
import { Stories } from '../Stories';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      page: 'Values',
      value: undefined
    };

    this.setValue = this.setValue.bind(this);
  }

  setPage(page) {
    this.setState({ page });
  }

  setValue(value) {
    this.setState({ value }, () => {
      this.setPage('Stories');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => {this.setPage('Values')}}>Home</Text>
          {this.state.page === 'Values' ? <Values setValue={this.setValue} /> : undefined}
          {this.state.page === 'Stories' ? <Stories value={this.state.value} /> : undefined}
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
