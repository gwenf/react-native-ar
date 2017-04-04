import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import Button from './styling/Button'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Showroom App</Text>
        <Button onPress={Actions.cameraar}>
          This is PageOne!
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
