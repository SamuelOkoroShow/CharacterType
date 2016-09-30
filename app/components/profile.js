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


export default class Profile extends Component {

  render() {
    return (
      <Image source ={require('../images/back.png')} resizeMode="stretch" style={styles.container}>
      <Nav name = "Profile" />
      <View style={{alignItems:'center', flexDirection:'row', flex:1, }}>
      <Image source = {this.props.user.image} style={{height:height-50, width:width/2}} resizeMode="contain" />
      <View style={{height:height-50, width:width/2, justifyContent:'center'}}>
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
      <Image source={require('../images/kills.png')} resizeMode="contain" style={{height:25, width:25}} />
      </View>
      <View style={{height:40, width:180, alignItems:'center', padding:5, marginLeft:5, backgroundColor:'rgba(0,0,0,0.5)', flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{color:'#fff', fontWeight:"400"}}>KILLS</Text>
      <Text style={{color:'#fff', fontWeight:"400"}}>{this.props.user.kills}</Text>
      </View>
      </View>

       <View style={{backgroundColor:'rgba(0,0,0,0)', marginTop:5, marginLeft:-45, height:40, width:220, alignItems:'center', flexDirection:'row', }}>
      <View style={{height:40, width:40, backgroundColor:'rgba(0,0,0,0.5)', alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../images/deaths.png')} resizeMode="contain" style={{height:25, width:25}} />
      </View>
      <View style={{height:40, width:180, alignItems:'center', padding:5, marginLeft:5, backgroundColor:'rgba(0,0,0,0.5)', flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{color:'#fff', fontWeight:"400"}}>DEATHS</Text>
      <Text style={{color:'#fff', fontWeight:"400"}}>{this.props.user.deaths}</Text>
      </View>
      </View>

      <View style={{backgroundColor:'rgba(0,0,0,0)', marginTop:5, marginLeft:-45, height:40, width:220, alignItems:'center', flexDirection:'row', }}>
      <View style={{height:40, width:40, backgroundColor:'rgba(0,0,0,0.5)', alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../images/assists.png')} resizeMode="contain" style={{height:25, width:25}} />
      </View>
      <View style={{height:40, width:180, alignItems:'center', padding:5, marginLeft:5, backgroundColor:'rgba(0,0,0,0.5)', flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{color:'#fff', fontWeight:"400"}}>ASSISTS</Text>
      <Text style={{color:'#fff', fontWeight:"400"}}>{this.props.user.assists}</Text>
      </View>
      </View>

      <View style={{backgroundColor:'rgba(0,0,0,0)', marginTop:5, marginLeft:-45, height:40, width:220, alignItems:'center', flexDirection:'row', }}>
      <View style={{height:40, width:40, backgroundColor:'rgba(0,0,0,0.5)', alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../images/friends.png')} resizeMode="contain" style={{height:25, width:25}} />
      </View>
      <View style={{height:40, width:180, alignItems:'center', padding:5, marginLeft:5, backgroundColor:'rgba(0,0,0,0.5)', flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{color:'#fff', fontWeight:"400"}}>FRIENDS</Text>
      <Text style={{color:'#fff', fontWeight:"400"}}>{this.props.user.friends}</Text>
      </View>
      </View>

      <View style={{backgroundColor:'rgba(0,0,0,0)', marginTop:5, marginLeft:-45, height:40, width:220, alignItems:'center', flexDirection:'row', }}>
      <View style={{height:40, width:40, backgroundColor:this.props.user.color, alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../images/campaign.png')} resizeMode="contain" style={{height:25, width:25}} />
      </View>
      <View style={{height:40, width:180, alignItems:'center', padding:5, marginLeft:5, backgroundColor:this.props.user.color, flexDirection:'row', justifyContent:'space-between'}}>
      <Text style={{color:'#fff', fontWeight:"400"}}>CAMPAIGNS</Text>
      <Text style={{color:'#fff', fontWeight:"400"}}>{this.props.user.completed_campaigns}</Text>
      </View>
      </View>


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

