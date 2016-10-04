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
      width:0,
      margin1:0,
      margin2:0,
      margin3:0,
      margin4:0,
      margin5:0
    }
  }

  componentDidMount(){
        
        setTimeout(() => {this.runAnimate()}, 1000);
    
  }

  runAnimate(){
     LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
this.setState({
      width:110,
      margin1:5,
      margin2:10,
      margin3:20,
      margin4:10,
      margin5:20,

    });
  }
  render() {
    return (
      <View style= {{ height:100, justifyContent:'space-between', width:width}}>
      <View style={{height:60, justifyContent:'space-around', marginTop:5, flexDirection:'row', alignItems:'center'}}>
      <TouchableOpacity onPress ={() => this.props.navigator.push({id:'campaign'})} >
      <Image source = {require('../../images/homeIcon.png')} style={{height:40, width:40}} />
      </TouchableOpacity>
       <TouchableOpacity onPress ={() => this.props.navigator.push({id:'friends'})} style={{marginTop:this.state.margin1}}>
      <Image source = {require('../../images/friendsIcon.png')} style={{height:40, width:40}} />
      </TouchableOpacity>
       <TouchableOpacity onPress ={() => this.props.navigator.push({id:'customize'})} style={{marginTop:this.state.margin2}}>
      <Image source = {require('../../images/customizeIcon.png')} style={{height:40, width:40}} />
      </TouchableOpacity>
       <TouchableOpacity onPress ={() => this.props.navigator.push({id:'profile'})} style={{marginTop:this.state.margin3}}>
      <Image source = {require('../../images/profileIcon.png')} style={{height:40, width:40}} />
      </TouchableOpacity>
       <TouchableOpacity onPress ={() => this.props.navigator.push({id:'progress'})} style={{marginTop:this.state.margin4}}>
      <Image source = {require('../../images/progressIcon.png')} style={{height:40, width:40}} />
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

