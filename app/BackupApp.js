/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

import Login from './app/client/auth/Login'
import Home from './app/client/screenTest/Home'


const App = Login

class Apps extends Component {
    render() {
        return (<Login/>)
    }
}


export default Apps









const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
class AppBackup extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>Hello coba</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Button
                    style={styles.btnShadow}
                    onPress={() => {
                        Alert.alert('You tapped the button!');
                    }}
                    elevation={5}
                    title="Press Me"
                />
            </View>
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    card: {
        backgroundColor: '#ffffff',
        height: 90,
        width: 300,
        borderRadius: 4,
        borderColor: '#fdfdfd',
        borderStyle: 'solid',
        borderWidth: 1,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000000',
        shadowOpacity: 0.27,
        shadowRadius: 2
    },
    btnShadow: {
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#000000',
        shadowOpacity: 0.27,
        shadowRadius: 2,
        elevation: 6
    }
});
