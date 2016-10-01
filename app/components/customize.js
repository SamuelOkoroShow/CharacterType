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

import Icon from 'react-native-vector-icons/MaterialIcons';

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
            <TouchableOpacity style={{height:50, width:50, marginLeft:3, marginRight:3, backgroundColor:this.props.user.color, alignItems:'center', justifyContent:'center'}}>
            <Icon name = "keyboard-arrow-left" color="#fff" size={30} />
            </TouchableOpacity>
            <View style={{height:50, width:240, justifyContent:'center', alignItems:'center', marginLeft:3, marginRight:3, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <Text style={{color:'#fff', fontSize:11, margin:2, textAlign:'center'}}>COLOR</Text>
            <Text style={{color:'#fff', textAlign:'center', margin:2}}>{this.props.user.colorName}</Text>
            </View>
            <TouchableOpacity onPress={this.props.next} style={{height:50, alignItems:'center', justifyContent:"center", width:50, marginLeft:3, marginRight:3, backgroundColor:this.props.user.color}}>
            <Icon name = "keyboard-arrow-right" color="#fff" size={30} />
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', marginTop:5, justifyContent:'center'}}>
            <TouchableOpacity style={{height:50, alignItems:'center', justifyContent:'center', width:50, marginLeft:3, marginRight:3, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <Icon name = "keyboard-arrow-left" color="#fff" size={30} />
            </TouchableOpacity>
            <View style={{height:50, width:240, marginLeft:3, justifyContent:'center', marginRight:3, backgroundColor:this.props.user.color}}>
<Text style={{color:'#fff', fontSize:11, margin:2, textAlign:'center'}}>GENDER</Text>
            <Text style={{color:'#fff', textAlign:'center', margin:2}}>MALE</Text>
            </View>
            <TouchableOpacity style={{height:50, alignItems:'center', justifyContent:'center', width:50, marginLeft:3, marginRight:3, backgroundColor:'rgba(0,0,0,0.5)'}}>
            <Icon name = "keyboard-arrow-right" color="#fff" size={30} />
            </TouchableOpacity>
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

