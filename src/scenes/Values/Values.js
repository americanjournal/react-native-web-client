import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// import fixtureValues from './fixtureValues.js';

export class Values extends Component {
  constructor() {
    super();

    this.state = {
      values: undefined
    };

    this._handlePress = this._handlePress.bind(this);
  }

  componentWillMount() {
    const host = 'https://fast-fjord-29570.herokuapp.com/';
    const url = `${host}values`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(values => {
      console.log(values);
      this.setState({ values: values.map((x) => x.name) });
    })
    .catch(error => {
      console.error(error);
    });

    // this.setState({ values: fixtureValues.values }, () => {
    //   console.log(this.state.values);
    // });
  }

  _handlePress(value) {
    this.props.setValue(value);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>VALUES</Text>
        {this.state.values ? this.state.values.map((value, i) => (
          <Text key={i} onPress={() => {this._handlePress(value)}}>{value}</Text>
        )) : undefined}
      </View>
    );
  }
}

Values.propTypes = {
  setValue: React.PropTypes.func.isRequired
};

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
