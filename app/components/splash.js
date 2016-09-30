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
  LayoutAnimation,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';

var {height, width} = Dimensions.get('window');
var i;
export default class Splash extends Component {
  constructor(props){
    super(props)
    this.state = {
      width:0
    }
  }
  componentDidMount(){
    setTimeout( () => this.props.navigator.push({id:"home"}), 3000);
  }
  render() {
    return (
      <View style={styles.container} >
            <Image source ={require('../images/logo.png')} resizeMode="contain" style={{height:150, width:150}} />
            <Text style={{textAligin:'center', color:'#333'}}>Nothing Is True {"\n"} Everything is Permited</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
}}
);

