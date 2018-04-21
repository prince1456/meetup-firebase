import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { Icon } from 'native-base';
import getCurrency from '../Api'
class Home extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => <Icon name='home' style={{color: tintColor}}/>
  }
  state = {
    currency: [],
    loading: true
  }
  componentDidMount() {
    getCurrency().then(res => {

      let data = [];
      _.forIn(res.rates, (value, key) => { 
       return data.push({[key]: value})
      })
    return data
  })
  .then(data => this.setState({currency: data , loading: false}))
  
  }

  render() {
    if (this.state.loading){
      return <ActivityIndicator />
    } 
    const renderdata = this.state.currency.map((key, index)=> {
      return (
        <View key={index}>
          <Text>{Object.keys(key)}</Text>
          <Text>{Object.values(key)}</Text>
        </View>
      )
    })
    return  {renderdata }
  }
}

export default Home