import React, { Component } from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import icnLogo from '../../../server/images/logo.png'

const HeaderLogo = (props) => (
    <View style={styles.container}>
        <Image  style={{width: 100, height: 100}}
                source={require('../../../server/images/logo.png')}/>
        <Text style={styles.logoText}>{props.title ? props.title : 'Welcome to Bpung'}</Text>
    </View>
)

const styles = StyleSheet.create({
    container : {
        justifyContent:'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },
    logoText : {
        marginVertical: 15,
        fontSize:18,
        color: '#000000',
        fontWeight: '600'
    }
});

export default HeaderLogo