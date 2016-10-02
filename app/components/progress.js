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
  ListView,
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
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Progress extends Component {
  constructor(props){
    super(props)

    this.state={
      fill:50,
      dataSource: ds.cloneWithRows(missions),
    }
  }

  eachMission(x){
    return(
      <View>
      <View style={{flexDirection:'row', justifyContent:'space-between', margin:15, marginBottom:-30}}>
        <Image source={require('../images/rally.png')} resizeMode="contain" style={{width:100, height:100, alignSelf:'center'}} />
        <Image source={require('../images/aid.png')} resizeMode="contain" style={{width:100, height:100, alignSelf:'center'}} />
        </View>
        <Image source={x.image} resizeMode="contain" style={{width:160, height:160, alignSelf:'center'}} />
      <View style={{backgroundColor:'rgba(255,255,255,0)', marginTop:-30, flexDirection:'row', alignItems:'center',}}>
      <View style={{backgroundColor:'rgba(255,255,255,0)', flexDirection:'row', alignItems:'center'}}>
      <AnimatedCircularProgress
      style={{margin:10, alignItems:'center', justifyContent:'center'}}
  size={70}
  width={3}
  fill={x.progress}
  tintColor="#00e0ff"
  backgroundColor="#999">

   {
    (fill) => (
        <Text style={{color:'#00e0ff', fontSize:18, fontWeight:'300', position:"absolute", top:23, left:20}}>
        { x.progress }%
      </Text>
    )
  }
  </AnimatedCircularProgress>
  <Text style={{color:'#333', fontSize:11}}>MISSION {'\n'}PROGRESS</Text>
  </View>
  <View style={{width:200, shadowColor: "#000000", shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { height: 1, width: 0 }}}>
  <View style={{ backgroundColor:'#333'}}>
<Text style={{color:'#fff', margin:5}}>DEATH DEFIANT</Text>
  </View>
  <View style={{flex:4, backgroundColor:'#fff'}}>
<Text style={{margin:5}}>{missions[0].deets}</Text>
  </View>
  </View>
  </View>
  </View>
  )
  }
  render() {
    return (
      <Image resizeMode="contain" source={require('../images/background.jpg')} style={styles.container}>
      <Nav name = "PROGRESS" {...this.props}/>
         <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.eachMission(rowData)}
          style={{marginTop:5}}
        />
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

