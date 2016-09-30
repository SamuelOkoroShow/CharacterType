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

var {height, width} = Dimensions.get('window');


export default class Profile extends Component {

  render() {
    return (
      <Image source ={require('../images/back.png')} resizeMode="stretch" style={styles.container}>
      <Image source = {this.props.user.image} style={{height:height, width:width/2}} resizeMode="contain" />
      <View style={{height:height, width:width/2, justifyContent:'center'}}>
      <View style={{backgroundColor:this.props.user.color, height:40, width:180, padding:5, justifyContent:'center', borderRightWidth:2, borderLeftWidth:2, borderColor:'#fff'}}>
      <Text style={{color:'#fff', fontWeight:'500', fontSize:17}}>{this.props.user.name}</Text>
      </View>
      <View style={{backgroundColor:'rgba(255,255,255,0.5)', marginTop:5, height:40, width:180, alignItems:'center', justifyContent:'space-between', flexDirection:'row', borderRightWidth:2, borderLeftWidth:2, borderColor:this.props.user.color}}>
      <Text style={{color:'#fff', margin:5, fontWeight:'600', fontSize:14, color:this.props.user.color}}>Wallet</Text>
      <Text style={{color:'#fff', margin:5, fontWeight:'600', fontSize:12, color:this.props.user.color}}>$44</Text>
      </View>


      </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    height:null,
    width:null,
    alignItems:'center',
    flexDirection:'row',

}}
);

