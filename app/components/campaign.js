/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
  Animated
} from 'react-native';

var {height, width} = Dimensions.get('window');
var hasAnimated = false;
import Nav from './widgets/nav'

export default class Campaign extends Component {
    componentWillMount(){
    this._animatedValue = new Animated.Value(0);
  }

 componentDidMount() {
    Animated.timing(this._animatedValue, {
        toValue: -900,
        duration: 41500
    }).start();
  }


  render() {
    return (
      <View style={styles.container}>
      <Animated.Image source={require('../images/longBack.jpg')} resizeMode="contain" style={{position:'absolute', left:0, top:0, width:width*4+100, height:height, transform: [{translateX: this._animatedValue}] }} />
      <Nav name="Campaigns" {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:null,
    width:null
}}
);

