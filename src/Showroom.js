import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Button from './styling/Button'
import Header from './styling/Header'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  chooseItem (number, ext) {
    // console.warn(number, ext);
    var imagePath = `../assets/img/item-${number}.${ext}`;
    Actions.cameraar({number});
  }

  render() {
    return (
      <View style={styles.container}>
        <Header>Choose a plant</Header>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>this.chooseItem(2, 'png')}>
            <Image source={require('../assets/img/item-2.png')}
              style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.chooseItem(4, 'png')}>
            <Image source={require('../assets/img/item-4.png')}
              style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>this.chooseItem(3, 'jpg')}>
          <Image source={require('../assets/img/item-3.png')}
            style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.chooseItem(1, 'jpg')}>
          <Image source={require('../assets/img/item-1.png')}
            style={styles.image} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 150,
    height: 180
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

        // <Button onPress={Actions.cameraar}>
          // Go to Camera
        // </Button>
