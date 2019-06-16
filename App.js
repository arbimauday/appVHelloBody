import React, {Component} from "react";
import { View, Text, Image } from "react-native";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import {grey, red, white, templateBlue} from './app/styles/colors'

import icnHome from './app/config/imgIcon/icons8-home-96.png'
import icnInbox from './app/config/imgIcon/icons8-sms-96.png'
import icnSearch from './app/config/imgIcon/icons8-search-96.png'
import icnUser from './app/config/imgIcon/icons8-customer-96.png'

// List Screen
import HomeScreen from './app/client/HomeScreen'
import InboxScreen from './app/client/InboxScreen'
import SearchScreen from './app/client/SearchScreen'
import ProfileScreen from './app/client/ProfileScreen'
// End


const AppNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => (
                <Image source={icnHome} style={{width:24, height: 24, tintColor: tintColor}} />
            )
        }
    },
    Inbox: {
        screen: InboxScreen,
        navigationOptions: {
            tabBarLabel: 'Inbox',
            tabBarIcon: ({tintColor}) => (
                <Image source={icnInbox} style={{width:24, height: 24, tintColor: tintColor}} />
            )
        }
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: ({tintColor}) => (
                <Image source={icnSearch} style={{width:24, height: 24, tintColor: tintColor}} />
            )
        }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => (
                <Image source={icnUser} style={{width:24, height: 24, tintColor: tintColor}} />
            )
        }
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: templateBlue.primary,
        inactiveBackgroundColor: white.main,
        inactiveTintColor: templateBlue.textPublic,
        activeTintBorderRadius: 3,
        style: {
            shadowOffset: {width: 5, height: 3},
            shadowColor: '#000',
            shadowOpacity: 0.8,
            elevation: 5,
            fontWeight: "bold",
            paddingTop: 5,
            paddingBottom: 5
        },
    },
    labelStyle: {
        fontSize: 16,
        paddingBottom: 15,
        color: 'red'
    },
    tabStyle: {
        fontWeight: 'bold',
        paddingBottom: 15,
        paddingTop: 5
    }
});

const AppStack = createStackNavigator({AppNavigator})

const  AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
        return (
            <AppContainer/>
        )
    }
}