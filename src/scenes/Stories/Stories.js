import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

// import fixtureStories from './fixtureStories.js';

export class Stories extends Component {
  constructor() {
    super();

    this.state = {
      stories: undefined
    };

    this._handlePress = this._handlePress.bind(this);
  }

  componentWillMount() {
    const host = 'https://fast-fjord-29570.herokuapp.com/';
    const url = `${host}values/1.json`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(stories => {
      this.setState({ stories: stories.stories });
    })
    .catch(error => {
      console.error(error);
    });

    // this.setState({ stories: fixtureStories.stories }, () => {
    //   console.log(this.state.stories);
    // });
  }

  _handlePress() {
    console.log('_handlePress');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>STORIES</Text>
        <Text>{this.props.value}</Text>
        {this.state.stories ? this.state.stories.map((story, i) => (
          <Text key={i}>{story.story}</Text>
        )) : undefined}
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
    justifyContent: 'flex-start',
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
