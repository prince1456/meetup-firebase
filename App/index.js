import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import { config } from '../config';
import { StackNavigator, TabNavigator} from 'react-navigation';
import Home from './screens/Home';
import Login from './screens/Login';
import Search from './screens/Search';
import Settings from './screens/Settings';


firebase.initializeApp(config);

class App extends Component {
    render(){
        return (
            <AppNavigator />
        )
    }
}

const TabNavigation = TabNavigator({
    Home: {screen: Home},
    Settings: { screen: Settings},
    Search: { screen: Search }
})

const AppNavigator = StackNavigator({
    Login: { screen: Login},
    Tabs: { screen: TabNavigation}
})






const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default App;