import React from 'react'
import {StyleSheet, Button, View} from 'react-native'
import {bottom} from '../../styles/colors'

const template = (props) => (
    <View>
        <Button color={props.color} title={props.title} onPress={props.onAction}/>
    </View>
)


export const blue = (props) => {
    return (
        <template colof={bottom.primaryBlue} title={props.title} onPress={props.handleClick} />
    )
}

export const purple = (props) => {
    return (
        <template colof={bottom.primaryPurple} title={props.title} onPress={props.handleClick} />
    )
}

export const green = (props) => {
    return (
        <template colof={bottom.primaryGreen} title={props.title} onPress={props.handleClick} />
    )
}

export const red = (props) => {
    return (
        <template colof={bottom.primaryRed} title={props.title} onPress={props.handleClick} />
    )
}

export const black = (props) => {
    return (
        <template colof={bottom.primaryBlack} title={props.title} onPress={props.handleClick} />
    )
}

export const base = (props) => {
    return (
        <template colof={bottom.primaryBase} title={props.title} onPress={props.handleClick} />
    )
}


export const blueOutline = (props) => {
    return (
        <template colof={bottom.transparent} title={props.title} onPress={props.handleClick} />
    )
}