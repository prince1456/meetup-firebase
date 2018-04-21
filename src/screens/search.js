import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Icon } from 'native-base';
import Expo from 'expo';

export class Search extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({tintColor}) => <Icon name='search' style={{ color: tintColor }} />
  }
  state = {
    contacts: null,
    loading: true,
  }
  componentDidMount(){
    this.showFirstContactAsync()
  }
   showFirstContactAsync = async () => {
    // Ask for permission to query contacts.
    const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    if (permission.status !== 'granted') {
      // Permission was denied...
      return;
    }
    const contacts = await Expo.Contacts.getContactsAsync({
      fields: [
        Expo.Contacts.PHONE_NUMBERS,
        Expo.Contacts.EMAILS,
      ],
      pageSize: 10,
      pageOffset: 0,
    });
    if (contacts.total === 0) {
      Alert.alert(
        'Your first contact is...',
        `Name:` +
        `Phone numbers: ` +
        `Emails: `
      );
    }
    this.setState({contacts})
  }
  render() {
    console.log(this.state.contacts)
    return (
      <View>
        <Text> Search </Text>
      </View>
    )
  }
}

export default Search