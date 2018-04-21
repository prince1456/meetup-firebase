import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, Header, Content, SwipeRow, ListView, View, Text, Icon, Button, List, ListItem } from 'native-base';
import { getCurrency } from '../api/api'
import Row from '../components/Row'
import _ from 'lodash';


export class Home extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({tintColor}) => <Icon name='home' style={{color: tintColor}}/>
  }
  state={
    currency: null,
    loading: true,
  }
  componentDidMount(){
    getCurrency().then(res => {
      let data = [];
      _.forIn(res.rates, (value, key) => { 
       return data.push({[key]: value})
      })
    return data
  })
  .then(data => this.setState({currency: data , loading: false}))
  }
  removeData = index => {
    let {currency} = this.state;
    currency.splice(index, 1)
    this.setState({currency})
  }
  render() {
    if(this.state.loading){
      return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#0000ff" />
          </View>
      )
    } 
    
   
    console.log("data", this.state.currency)
    return (
      <Container style={{backgroundColor: 'white'}}>
        <Content style={{marginTop: 40}}>
          <Row currency={this.state.currency} removeData={this.removeData} />
        </Content>
      </Container>
    )
  }
}

export default Home