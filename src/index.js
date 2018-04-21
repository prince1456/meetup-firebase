import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Home, Login, Search, Settings } from './screens';
import * as firebase from 'firebase'
import { config } from '../config'
firebase.initializeApp(config);


const App = () => <AppNavigator />
export default App;

const TabNavigation = TabNavigator({
    Home: {screen: Home},
    Search: {screen: Search},
    Settings: {screen: Settings},
},{
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
        style: {
            ...Platform.select({
                android: {
                    backgroundColor: 'white'
                }
            })
        },
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        showLabel: false,
        showIcon: true
    },

})

const AppNavigator = StackNavigator({
    Login: { screen: Login },
    App: { screen: TabNavigation }
})


