import React from 'react';
import SettingsList from 'react-native-settings-list';
import {
  Image,
  View,
  Alert,
} from 'react-native';



export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(){
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {switchValue: false};
  }

  onValueChange(value){
    this.setState({switchValue: value});
  }

  render() {
    var bgColor = '#DCE3F4';
  return (
    <View style={{backgroundColor:'#EFEFF4',flex:1}}>
      <SettingsList>
        <SettingsList.Item
            icon={
              <View style={{height:30,marginLeft:10,alignSelf:'center'}}>
                <Image style={{alignSelf:'center',height:40, width:40}} source={require('../../assets/images/robot-dev.png')}/>
              </View>
            }
            itemWidth={50}
            title='Example Setting 1'
            onPress={() => Alert.alert('Make this route to login')}
          />
        <SettingsList.Item
            hasNavArrow={false}
            switchState={this.state.switchValue}
            switchOnValueChange={this.onValueChange}
            hasSwitch={true}
            title='Example Setting 2'/>
      </SettingsList>
    </View>
  );
}

  }
