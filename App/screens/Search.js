import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'native-base'
class Search extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => <Icon name='search' style={{color: tintColor}}/>
  }
  render() {
    return (
      <View>
        <Text> Search </Text>
      </View>
    )
  }
}

export default Search