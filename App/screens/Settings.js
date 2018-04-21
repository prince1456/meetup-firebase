import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'native-base'

class Settings extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => <Icon name='ios-cog' style={{color: tintColor}}/>
  }
  render() {
    return (
      <View>
        <Text> Settings </Text>
      </View>
    )
  }
}

export default Settings