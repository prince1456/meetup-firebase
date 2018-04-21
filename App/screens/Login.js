import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import * as firebase from 'firebase';

class Login extends Component {
    static navigationOptions= {
        header: null,
    }
    state = {
        userName: null,
        password: null,
        error: null,
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.props.navigation.navigate('App')
            } else {
              this.setState({ loading: false, authenticated: false });
            }
          });
    }
    _handleLogin = async () =>{
        try {
            const { userName, password } = this.state
            const user = await firebase.auth().signInWithEmailAndPassword(userName, password)
            this.props.navigation.navigate('Tabs')
        }
        catch(error){
            this.setState({error: error.message.toString()})
        }
    }
    _handleSignUp = async () => {
        try {
            const { userName, password } = this.state;
            const user = await firebase.auth().createUserWithEmailAndPassword(userName, password)
            this.props.navigation.navigate("Tabs")
        } 
        catch(error){
            this.setState({error: error.message.toString()})
        }
        
    }
  render() {
    return (
      <Container>
          {
              this.state.error && <Text>{this.state.error}</Text>
          }
           <Form >
           <Item floatingLabel>
              <Label>Username</Label>
              <Input 
                onChangeText={userName => this.setState({userName})}
              />
            </Item>
            <Item floatingLabel>
              <Label>password</Label>
              <Input 
                secureTextEntry              
                onChangeText={password => this.setState({password})}
              />
            </Item>
                <Button
                    onPress={this._handleLogin}
                 full success>
                    <Text>Login</Text>
                </Button>
                <Button
                onPress={this._handleSignUp}
                 full primary>
                    <Text>SignUp</Text>
                </Button>
            </Form>
      </Container>
    )
  }
}

export default Login