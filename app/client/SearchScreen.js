import React, {Component} from 'react'
import {StyleSheet, Text, View, Button,} from 'react-native'
import {templateBlue} from '../styles/colors'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";

class SearchScreen extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Search Screen</Text>
            </View>
        )
    }
}

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

export default SearchScreen
