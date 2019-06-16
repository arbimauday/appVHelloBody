import React, {Component} from 'react'
import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import {templateBlue} from '../styles/colors'
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import wall from '../config/wallUser.jpg'
import Card from '../ui/components/Card'

class ProfileScreen extends Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}><Image style={styles.header} source={wall}/></View>
                    <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <Text style={styles.name}>John Doe</Text>
                            <Text style={styles.info}>UX Designer / Mobile developer</Text>

                            <Card title="Description">
                                <Text style={styles.description}>
                                    Lorem ipsum dolor sit amet, saepe sapientem eu nam.
                                    Qui ne assum electram expetendis,
                                    omittam deseruisse consequuntur ius an
                                </Text>
                            </Card>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={{color: '#fff'}}>Opcion 1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContainer}>
                                <Text style={{color: '#fff'}}>Opcion 2</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        height:200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
    },
    body:{
        marginTop:40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:10,
    },
    name:{
        fontSize:28,
        color: "#000",
        fontWeight: "600"
    },
    info:{
        fontSize:16,
        color: templateBlue.textSecond,
        marginTop:0,
        marginBottom: 10
    },
    description:{
        fontSize:16,
        color: "#696969",
        textAlign: 'left'
    },
    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        color: '#fff',
        borderRadius:5,
        backgroundColor: templateBlue.primary,
    },
});

export default ProfileScreen
