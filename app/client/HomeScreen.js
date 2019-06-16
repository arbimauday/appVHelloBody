import React, {Component} from 'react'
import {StyleSheet, Text, View, Button,} from 'react-native'
import {templateBlue} from '../styles/colors'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Home',
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Add New"
                color={templateBlue.textPrimary}
            />
        ),
        styles: {
            textAlign: 'center'
        }
    };

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Home Screen</Text>
            </View>
        )
    }
}

class HomeDetailsScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            />
        ),
    };

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Home Detail Screen</Text>
            </View>
        )
    }
}

const Apps = createStackNavigator(
    {
        HomeMain: HomeScreen,
        HomeDetail: HomeDetailsScreen,
    },
    {
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: templateBlue.primary,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: templateBlue.baseBackground,
    },
    text : {
        fontWeight: '600',
        color: templateBlue.textPrimary
    }
})




export default Apps
