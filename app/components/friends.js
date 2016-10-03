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
  ListView,
  Image,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native';

var friends = [
{
  image: require('../images/friend1.png'),
  name:'NICK ANDERSON',
  rank:21
},
{
  image: require('../images/friend2.png'),
  name:'ANDERSON NICKOLAS',
  rank:12
},
{
  image: require('../images/friend3.png'),
  name:'NICK ANDY',
  rank:13
},
{
  image: require('../images/friend4.png'),
  name:'ANDY NICK',
  rank:1
},
{
  image: require('../images/friend5.png'),
  name:'NICKY ANDERSON',
  rank:24
},
{
  image: require('../images/friend6.png'),
  name:'NICKY & ANDY',
  rank:24
}
]
var {height, width} = Dimensions.get('window');
import Nav from './widgets/nav'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class Friends extends Component {
  constructor(props){
    super(props)

    this.state={
      fill:50,
      dataSource: ds.cloneWithRows(friends),
    }
  }
  eachfriend(x){
    return(<TouchableOpacity style={{margin:5, flexDirection:'row', justifyContent:'space-between', borderBottomWidth:1, borderColor:'#fff', height:95, width:width-20, shadowColor: "#000000", shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { height: 1, width: 0 }, backgroundColor:"rgba(255,255,255,0.3)"}}>
      <Image source={x.image} resizeMode="contain" style={{height:95, width:90}} />
      <View style={{justifyContent:'center',}}>
      <Text style={{color:'#333'}}>{x.name}</Text>
      <Text style={{color:'#555', fontSize:11, }}>@Raddeviant</Text>
      </View>
      <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'rgba(0,0,0,0.3)', width:70}}><Text style={{color:'#fff'}}>{x.rank}</Text></View>
      </TouchableOpacity>)
  }
  render() {
    return (
    <Image source ={require('../images/back3.jpg')} resizeMode="cover" style={styles.container}>
      <Nav name="Friends" {...this.props} />
       <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.eachfriend(rowData)}
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
    height:null,

}}
);

