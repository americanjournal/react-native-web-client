import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import fixtureStories from './fixtureStories.js';

export class Stories extends Component {
  constructor() {
    super();

    this.state = {
      stories: undefined
    };

    this._handlePress = this._handlePress.bind(this);
  }

  componentWillMount() {
    // /values/1.json
    // const host = 'https://fast-fjord-29570.herokuapp.com/';
    // const url = `${host}${this.props.value}`;
    // fetch(url)
    // .then(response => response.json())
    // .then(stories => {
    //   this.setState({ stories });
    // })
    // .catch(error => {
    //   console.error(error);
    // })
    this.setState({ stories: fixtureStories }, () => {
      console.log(this.state.stories);
    });
  }

  _handlePress() {
    console.log('_handlePress');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.value}</Text>
        {this.state.stories.stories.map((story) => (
          <TouchableHighlight>
            <Text>{story.story}</Text>
          </TouchableHighlight>
        ))}
      </View>
    );
  }
}

Stories.propTypes = {
  value: React.PropTypes.string.isRequired
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
