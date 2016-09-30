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

export default class Slide1 extends Component {
  constructor(props){
    super(props)

    this.state = {
      width:0
    }
  }

  

  render() {
    return (
      <View style= {{ height:100, justifyContent:'space-between'}}>
      <View style={{height:60, justifyContent:'space-around', marginTop:5, flexDirection:'row', alignItems:'center'}}>
      <TouchableOpacity>
      <Image source = {require('../../images/homeIcon.png')} style={{height:40, width:40}} />
      </TouchableOpacity>
       <TouchableOpacity style={{marginTop:10}}>
      <Image source = {require('../../images/friendsIcon.png')} style={{height:40, width:40}} />
      </TouchableOpacity>
       <TouchableOpacity style={{marginTop:20}}>
      <Image source = {require('../../images/customizeIcon.png')} style={{height:40, width:40}} />
      </TouchableOpacity>
       <TouchableOpacity style={{marginTop:20}}>
      <Image source = {require('../../images/profileIcon.png')} style={{height:40, width:40}} />
      </TouchableOpacity>
       <TouchableOpacity style={{marginTop:0}}>
      <Image source = {require('../../images/progressIcon.png')} style={{height:40, width:40}} />
      </TouchableOpacity>
       <TouchableOpacity style={{marginTop:10}}>
      <Image source = {require('../../images/settingsIcon.png')} style={{height:40, width:40}} />
      </TouchableOpacity>
      </View>
      <View style= {{ padding:5, justifyContent:'center', backgroundColor:"rgba(140,10,10, 0.6)", height:30, borderLeftWidth:3, borderColor:'#fff', margin:10, width:this.state.width, }}>
      <Text style={{color:'#fff', fontWeight:"500"}}>{this.props.name.toUpperCase()}</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  }
);

