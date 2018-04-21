import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import {Container, Content, Button, Icon } from 'native-base'
import { ImagePicker } from 'expo';
import * as firebase from 'firebase'

export class Settings extends Component {
    static navigationOptions = {
        header: null, 
        tabBarIcon: ({tintColor}) => <Icon name='ios-cog' style={{color: tintColor}} />
    }
    state ={ 
      image: null
    };
    _handleSingOut = () => {
      firebase.auth().signOut().then(()=> this.props.navigation.navigate('Login'))
    };
    // _uploadImage = async () => {
    //   try{
    //     const storage = firebase.storage().ref('users');
    //     const user = await firebase.auth().currentUser;      
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //       allowsEditing: true,
    //       aspect: [4, 3],
    //       base64: true,
    //     });   
    //     if (!result.cancelled) {
    //       const image = await storage.child(user.uid).child('/image.jpg/').putString(result.base64)
    //       this.setState({image: image.downloadURL})
    //     }
    //   }catch(error){
    //     this.setState({error: error.toString()})
    //   }
    // };
  render() {
    const { image } = this.state;
    return (
      <Container >
        <Content style={styles.Container}>
          { image &&
            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
          }        
          
          {/* <Button style={styles.btn} full success onPress={this._uploadImage}><Text>Upload Image</Text></Button> */}
          <Button style={styles.btn} full success onPress={this._handleSingOut}><Text>Sign Out</Text></Button>
        </Content>
      </Container>
    )
  }
}

export default Settings


const styles = StyleSheet.create({
  Container: {
    paddingVertical: 200,
    paddingHorizontal: 20,
     flex: 1
  },
  btn: {
    marginTop: 10,
  }
})