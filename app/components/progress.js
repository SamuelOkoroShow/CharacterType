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
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import Nav from "./widgets/nav"

var missions = [
{
  image : require('../images/mission1.png'),
  deets: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam",
  progress: 60
},
{
  image : require('../images/mission2.png'),
  deets: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam",
  progress: 45
},
{
  image : require('../images/mission3.png'),
  deets: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam",
  progress: 78
},
{
  image : require('../images/mission4.png'),
  deets: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam",
  progress: 30
},
{
  image : require('../images/mission5.png'),
  deets: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam",
  progress: 33
}
]
export default class Progress extends Component {
  constructor(props){
    super(props)

    this.state={
      fill:50
    }
  }

  render() {
    return (
      <Image resizeMode="contain" source={require('../images/background.jpg')} style={styles.container}>
      <Nav name = "PROGRESS" {...this.props}/>
        <View style={{flexDirection:'row', justifyContent:'space-between', margin:15, marginBottom:-30}}>
        <Image source={require('../images/rally.png')} resizeMode="contain" style={{width:100, height:100, alignSelf:'center'}} />
        <Image source={require('../images/aid.png')} resizeMode="contain" style={{width:100, height:100, alignSelf:'center'}} />
        </View>
        <Image source={require('../images/mission1.png')} resizeMode="contain" style={{width:160, height:160, alignSelf:'center'}} />
      <View style={{backgroundColor:'rgba(255,255,255,0)', marginBottom:-30, marginTop:10, flexDirection:'row', alignItems:'center',}}>
      <View style={{backgroundColor:'rgba(255,255,255,0)', flexDirection:'row', alignItems:'center'}}>
      <AnimatedCircularProgress
      style={{margin:10, alignItems:'center', justifyContent:'center'}}
  size={70}
  width={3}
  fill={this.state.fill}
  tintColor="#00e0ff"
  backgroundColor="#999">

   {
    (fill) => (
        <Text style={{color:'#00e0ff', fontSize:18, fontWeight:'300', position:"absolute", top:23, left:20}}>
        { this.state.fill }%
      </Text>
    )
  }
  </AnimatedCircularProgress>
  <Text style={{color:'#333', fontSize:11}}>MISSION {'\n'}PROGRESS</Text>
  </View>
  <View></View>
  </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null

}}
);

