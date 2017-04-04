import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import Showroom from './Showroom';
import CameraAR from './CameraAR';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key="root">
            <Scene key="showroom" component={Showroom} title="Showroom" initial={true} />
            <Scene key="cameraar" component={CameraAR} title="Camera" />
          </Scene>
        </Router>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
