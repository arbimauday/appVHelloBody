import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native'
import {grey} from '../../styles/colors'



/*
*  Set form input text : props.type is empty
*  Set form input number : props.type is numeric
* */

export const textInput = (props) => {
    return (
        <View>
            {props.title ? <Text style={[styles.title]}>{props.title}</Text> : null}
            <TextInput placeholder={props.placeholder}
                       onChangeText={(value) => props.handleChangeInput(value, props.name)}
                       style={styles.inputBox}
                       keyboardType={props.type ? props.type : 'text'}
                       placeholderTextColor={grey.placeholder}
                       min={props.min}
                       max={props.max}
                       value={props.value} secureTextEntry={true} />
        </View>
    )
}

export const checkBox = ''


const styles = StyleSheet.create({
    title: {
        color: grey.dodger
    },
    inputBox: {
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#222222',
        borderColor: 'rgba(0, 0, 0, 0.07)',
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 10
    }
})