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
import Splash from './splash'

// I'm going to keep state in this view for this app
// It's just going to be "signed in User State"
var image1 = require('../images/dudeBlue.png');
var image2 = require('../images/dudeGreen.png');
var image3 = require('../images/dudePurple.png');
var image4 = require('../images/dudeRed.png');
var image5 = require('../images/dudeSky.png');
var image6 = require('../images/dudeYellow.png');

var dudes = [image1, image2, image3, image4, image5, image6]

var state = {
  user:{
    name:'Samuel Okoro',
    image: dudes[0],
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
 
  }
 
  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'profile') {
      return (
        <Profile
        {...this.props} 
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
     initialRoute={{id: 'profile', name: 'profile'}}
     renderScene={this.renderScene.bind(this)}/>
        </View>
    )
}
}
