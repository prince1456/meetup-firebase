import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import * as firebase from 'firebase';


export default class Login extends Component {
  static navigationOptions ={
    header: null
  }
  state= {
    email: '',
    password: '',
    error: '',
    loading: true,
    authenticated: false,
  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('App')
      } else {
        this.setState({ loading: false, authenticated: false });
      }
    });
  }
  _handleSignIn = async () =>{
    const {email, password} = this.state;
    try{
      const user = await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log("login")
      this.props.navigation.navigate('App')
    }
    catch(error){
      this.setState({error: error.toString()})
    }

    
  }
  _handleSignUp = async () => {
    const {email, password} = this.state;
    try{
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const database = await firebase.database().ref('users').child(user.uid);
      database.set({email});
      this._handleSignIn();
      this.setState({error: ''});
    }
    catch(error){
      this.setState({error: error.toString()})
    }
  }
  render() {

    return (
      <Container style={styles.Container}>
        <Content>
          <Text>{this.state.error}</Text>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                autoCorrect={false}
                autoCapitalize={'none'}
                onChangeText={email => this.setState({email})}
                />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input 
              autoCorrect={false}
              autoCapitalize={'none'}
              secureTextEntry={true}
              onChangeText={password => this.setState({password})}
              />
            </Item>
            <Button onPress={this._handleSignIn}style={styles.button} full success>
              <Text>
                Sign In
              </Text>
            </Button>
            <Button  onPress={this._handleSignUp} style={styles.button} full primary>
              <Text>
                Sign Up
              </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 200,
    paddingHorizontal: 30,
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  button: {
    marginTop: 10
  }
})