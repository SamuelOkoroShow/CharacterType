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
  View
} from 'react-native';

import Nav from "./widgets/nav"
var {height, width} = Dimensions.get('window');


export default class Customize extends Component {

  render() {
    return (
      <Image source ={require('../images/back.png')} resizeMode="cover" style={styles.container}>
      <Nav {...this.props} name = "Customize" />
            <Image source = {this.props.user.image} style={{flex:8, height:null, width:null}} resizeMode="contain" />
            <View style={{flex:2}}>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
            <TouchableOpacity style={{height:50, width:50, marginLeft:3, marginRight:3, backgroundColor:'rgba(0,0,0,0.5)'}}></TouchableOpacity>
            <View style={{height:50, width:240, alignItems:'center', marginLeft:3, marginRight:3, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <Text style={{color:'#fff', fontSize:11, margin:5}}>COLOR</Text>
            <Text style={{color:'#fff'}}>BLUE</Text>
            </View>
            <TouchableOpacity style={{height:50, width:50, marginLeft:3, marginRight:3, backgroundColor:'rgba(0,0,0,0.5)'}}></TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', marginTop:5, justifyContent:'center'}}>
            <TouchableOpacity style={{height:50, width:50, marginLeft:3, marginRight:3, backgroundColor:'rgba(0,0,0,0.5)'}}></TouchableOpacity>
            <View style={{height:50, width:240, marginLeft:3, marginRight:3, backgroundColor:'rgba(0,0,0,0.5)'}}></View>
            <TouchableOpacity style={{height:50, width:50, marginLeft:3, marginRight:3, backgroundColor:'rgba(0,0,0,0.5)'}}></TouchableOpacity>
            </View>
            </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      height:null,
    width:null,

}}
);

