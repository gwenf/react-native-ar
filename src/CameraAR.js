import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import Camera from 'react-native-camera';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: {origin: {x: 0, y:0}, size: {height:0, width:0}},
      opacity: 0,
      cameraType: Camera.constants.Type.back
    };
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  readQR(e) {
    if (e.data == 'Hello :)') {
      this.setState({opacity: 1});
    }
    else {
      this.setState({opacity: 1});
    }
    this.setState({bounds: e.bounds, data: e.data});
  }

  switchCamera () {
    var state = this.state;
    state.cameraType = state.cameraType === Camera.constants.Type.back ? Camera.constants.Type.front : Camera.constants.Type.back;
    this.setState(state);
  }

  _takePicture () {
    this.refs.cam.capture(function(err, data) {
      console.log(err, data);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          onBarCodeRead={this.readQR.bind(this)}
          aspect={Camera.constants.Aspect.fill}>
          <View style={styles.buttonBar}>
            <TouchableHighlight style={styles.button} onPress={this.switchCamera.bind(this)}>
              <Text style={styles.buttonText}>Flip</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={this.takePicture.bind(this)}>
              <Text style={styles.buttonText}>Take</Text>
            </TouchableHighlight>
          </View>
          <Image
            style={{
              opacity: this.state.opacity,
              height: parseInt(this.state.bounds.size.height),
              width: parseInt(this.state.bounds.size.width),
              left: parseInt(this.state.bounds.origin.x),
              top: parseInt(this.state.bounds.origin.y),
              resizeMode: 'stretch',
              position: 'absolute'
            }}
            source={require('../assets/img/fox-250-157.png')}
          />
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  buttonBar: {
    flexDirection: "row",
    position: "absolute",
    bottom: 25,
    right: 0,
    left: 0,
    justifyContent: "center"
  },
  button: {
    padding: 10,
    // color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    margin: 5
  },
  buttonText: {
    color: "#FFFFFF"
  }
});
