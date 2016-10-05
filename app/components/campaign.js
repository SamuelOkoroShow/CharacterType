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
  ScrollView,
  ListView,
  Dimensions,
  TouchableOpacity,
  View,
  Animated
} from 'react-native';

var missions = [
{
  image: require('../images/raid.png'),
  name:'Bandit Raid',
  info:'Orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus lobortis arcu, vel porta erat tempor sed. Sed pulvinar ultricies purus, scelerisque rutrum enim iaculis quis'
},
{
  image: require('../images/death.png'),
  name:'Death Match',
  info:'Orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus lobortis arcu, vel porta erat tempor sed. Sed pulvinar ultricies purus, scelerisque rutrum enim iaculis quis'
},
{
  image: require('../images/boozeRun.png'),
  name: "Booze Run",
  info: 'Orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus lobortis arcu, vel porta erat tempor sed. Sed pulvinar ultricies purus, scelerisque rutrum enim iaculis quis'
},
{
  name: "Shark Raid",
  image: require('../images/sharkRaid.png'),
  info: 'Orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus lobortis arcu, vel porta erat tempor sed. Sed pulvinar ultricies purus, scelerisque rutrum enim iaculis quis'
},{
  name:'Sail',
  image: require('../images/sail.png'),
  info:'Orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus lobortis arcu, vel porta erat tempor sed. Sed pulvinar ultricies purus, scelerisque rutrum enim iaculis quis'
}
]
var {height, width} = Dimensions.get('window');
var hasAnimated = false;
import Nav from './widgets/nav'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Campaign extends Component {
  constructor(props){
    super(props)
     this.state={
      fill:50,
      dataSource: ds.cloneWithRows(missions),
    }

  }
    componentWillMount(){
    this._animatedValue = new Animated.Value(0);
  }

 componentDidMount() {
    Animated.timing(this._animatedValue, {
        toValue: -900,
        duration: 51500
    }).start();
  }

  eachMission(x){
    return(
      <TouchableOpacity>
<View style={{height:100, flexDirection:'row', width:360, margin:3, alignItems:'center', backgroundColor:'rgba(0,0,0,0.2)'}}>
      <Image source={x.image} style={{height:40, margin:10, width:40}} resizeMode='contain' />
      <View style={{width:280}}>
      <Text style={{color:'#fff', marginBottom:5, fontWeight:'600', textDecorationLine:'underline'}}>{x.name}</Text>
      <Text style={{color:'#fff', fontSize:12}}>{x.info}</Text>
      </View>
      </View>
      
      </TouchableOpacity>
      )
  }

  render() {
    return (
      <View style={styles.container}>
      <Animated.Image source={require('../images/longBack.jpg')} resizeMode="contain" style={{position:'absolute', left:0, top:0, width:width*4+100, height:height, transform: [{translateX: this._animatedValue}] }} />
      <Nav name="Campaigns" {...this.props} />
      <View style={{alignItems:'center', flex:1}}>
      <View style={{height:60, width:360, margin:3, marginTop:10, alignItems:'center', borderLeftWidth:2, borderRightWidth:2, borderColor:'#fff', justifyContent:'center', backgroundColor:this.props.user.color}}>
      <Text style={{color:'#fff',fontWeight:'500'}}>AVAILABLE MISSIONS</Text>
      <Text style={{color:'#fff',fontWeight:'400', fontSize:11}}>(COMMUNITY BUILT)</Text>
      </View>
      <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.eachMission(rowData)}
          style={{flex:1}}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:null,
    width:null
}}
);

