import React from 'react'
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import {templateBlue} from '../../styles/colors'

const Card = (props) => {
    let title = props.title ? props.title : null

    return(
        <View style={styles.wrapping}>
            {title ? (
                <View style={styles.titleWrapping}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
            ) : null}
            {props.children}
        </View>
    )
}


const styles =  StyleSheet.create({
    wrapping: {
        backgroundColor: '#fff',
        padding: 13,
        borderColor: '#f4f4f4',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        marginBottom: 10,
        shadowOffset: {width: 6, height: 3},
        shadowColor: '#000',
        shadowOpacity: 0.8,
        elevation: 5,
    },
    titleText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 13,
        margin: 0,
        padding: 0
    },
    titleWrapping:{
        padding: 0,
        marginBottom: 5
    }
})


export default Card
