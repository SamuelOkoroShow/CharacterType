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
      <View style={{backgroundColor:this.props.user.color, height:35, width:180, padding:5, flexDirection:'row', alignItems:'center', borderRightWidth:2, borderLeftWidth:2, borderColor:'#fff'}}>
      <Image source={require('../images/class.png')} resizeMode="contain" style={{height:20, width:20}} />
      <Text style={{color:'#fff', fontWeight:'300', fontSize:18, margin:5,}}>{this.props.user.name}</Text>
      </View>
      <View style={{backgroundColor:'rgba(255,255,255,0.5)', marginTop:5, height:35, width:180, alignItems:'center', justifyContent:'space-between', flexDirection:'row', borderRightWidth:2, borderLeftWidth:2, borderColor:this.props.user.color}}>
      <Text style={{color:'#fff', margin:5, fontWeight:'400', fontSize:14, color:this.props.user.color}}>Wallet</Text>
      <Text style={{color:'#fff', margin:5, fontWeight:'600', fontSize:12, color:this.props.user.color}}>$44</Text>
      </View>

      <View style={{backgroundColor:'rgba(0,0,0,0)', marginTop:25, marginLeft:-45, height:40, width:220, alignItems:'center', flexDirection:'row', }}>
      <View style={{height:40, width:40, backgroundColor:'rgba(0,0,0,0.5)', alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../images/class.png')} resizeMode="contain" style={{height:25, width:25}} />
      </View>
      <View style={{height:40, width:180, marginLeft:5, backgroundColor:'rgba(0,0,0,0.5)'}}></View>
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

