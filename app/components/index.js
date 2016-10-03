import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import Profile from './profile'
import Progress from './progress'
import Friends from './friends'
import Splash from './splash'
import Customize from './customize'

// I'm going to keep state in this view for this app
// It's just going to be "signed in User State"
var image1 = require('../images/dudeBlue.png');
var image2 = require('../images/dudeGreen.png');
var image3 = require('../images/dudePurple.png');
var image4 = require('../images/dudeRed.png');
var image5 = require('../images/dudeSky.png');
var image6 = require('../images/dudeYellow.png');

var image7 = require('../images/chickBlue.png');
var image8 = require('../images/chickGreen.png');
var image9 = require('../images/chickPurple.png');
var image10 = require('../images/chickRed.png');
var image11 = require('../images/chickSky.png');
var image12 = require('../images/chickYellow.png');

var red = "rgba(140,10,10, 0.6)"
var yellow = "rgba(165,129,82,0.6)"
var blue = "rgba(32,84,152,0.6)"
var green = "rgba(86,145,71,0.6)"
var sky = "rgba(72,145,163,0.6)"
var purple = "rgba(132, 66, 140, 0.6)"

var dudes = [image1, image2, image3, image4, image5, image6]
var chicks = [image7, image8, image9, image10, image11, image12]
var colors = [blue, green, purple, red, sky, yellow]
var colorNames = ["BLUE", "GREEN", "PURPLE", "RED", "SKY", "YELLOW"]
var y = 0;
var character = dudes;
var gender = "male";
var state = {
  user: {
    name:'Samuel Okoro',
    image: dudes[y],
    color: blue,
    gender: gender,
    colorName: "BLUE",
    kills: 1431,
    deaths: 113,
    assists: 12,
    completed_campaigns: 5,
    friends: 12
  }
}


export default class Index extends Component {
  constructor(props){
    super(props)
  
    this.state = {
      user: state.user
    }
  }
 
 nextImage(){
  if(y < 5){
    y++
    this.setState({
      user: {
      name:'Samuel Okoro',
      image: character[y],
      colorName: colorNames[y],
      color: colors[y],
      kills: 1431,
      deaths: 113,
      gender: gender,
      assists: 12,
      completed_campaigns: 5,
      friends: 12
    }
  
    })}
 }
 prevImage(){
  if(y > 0){
    y--
    this.setState({
      user: {
      name:'Samuel Okoro',
      image: character[y],
      colorName: colorNames[y],
      color: colors[y],
      kills: 1431,
      gender:gender,
      deaths: 113,
      assists: 12,
      completed_campaigns: 5,
      friends: 12
    }
  
    })}
 }

 genderSwitch(){
  if(this.state.user.gender == "male"){
    gender = "female"
    character = chicks;
    this.setState({
      user: {
      name:'Samuel Okoro',
      image: character[y],
      colorName: colorNames[y],
      color: colors[y],
      kills: 1431,
      gender:gender,
      deaths: 113,
      assists: 12,
      completed_campaigns: 5,
      friends: 12
    }
  
    })
  }else{
    gender = "male"
    character = dudes;
    this.setState({
      user: {
      name:'Samuel Okoro',
      image: character[y],
      colorName: colorNames[y],
      color: colors[y],
      kills: 1431,
      gender:gender,
      deaths: 113,
      assists: 12,
      completed_campaigns: 5,
      friends: 12
    }
  
    })
  }
 }

  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'profile') {
      return (
        <Profile
        {...this.props} 
        user = {this.state.user}
        navigator={navigator} />
        );
    }
    if (routeId === 'progress') {
      return (
        <Progress
        {...this.props} 
        user = {this.state.user}
        navigator={navigator} />
        );
    }
    if (routeId === 'customize') {
      return (
        <Customize
        {...this.props} 
        user = {this.state.user}
        next = {() => this.nextImage()}
        prev = {() => this.prevImage()}
        genderSwitch = {() => this.genderSwitch()}
        navigator={navigator} />
        );
    }
    if (routeId === 'friends') {
      return (
        <Friends
        {...this.props} 
        user = {this.state.user}
        navigator={navigator} />
        );
    }
    if (routeId === 'splash') {
      return (
        <Splash
        {...this.props} 
        navigator={navigator} />
        );
    }

    
  
   }


  render() {
    return (
      <View style={{flex:1}}>
     <Navigator
     style={{flex: 1}}
     ref={'NAV'}
     initialRoute={{id: 'friends', name: 'friends'}}
     renderScene={this.renderScene.bind(this)}/>
        </View>
    )
}
}
