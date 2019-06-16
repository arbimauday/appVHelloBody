/**
 * Created by globa on 4/20/2019.
 */
import React, {Component} from 'react';
import {YellowBox, Platform, StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native'
import HeaderLogo from './component/HeaderLogo'

YellowBox.ignoreWarnings(['Warning: ...']);

class Login extends Component {

    state = {
        form: {
            user: '',
            pass: ''
        },
        onLoading: false
    }

    _handleChangeInput = (value, name) => {
        this.setState(prevState => {
            let newForm = prevState.form

            newForm[name] = value
            return {
                form : newForm
            }
        })
    }

    _handleValidation = () => {

    }

    static navigationOptions = {
        title: "Home Screen"
    }

    render() {
        const {form} = this.state

        return (
            <View style={styles.container}>
                <HeaderLogo/>

                <View elevation={5} style={[{marginLeft: 40, marginRight: 40}]}>
                    <TextInput placeholder="user or email" onChangeText={(value) => this._handleChangeInput(value, 'user')}
                               style={styles.inputBox}
                               placeholderTextColor={'#b3b3b3'}
                               name="user" value={form.user} />
                    <TextInput placeholder="password" onChangeText={(value) => this._handleChangeInput(value, 'pass')}
                               style={styles.inputBox}
                               placeholderTextColor={'#b3b3b3'}
                               name="pass" value={form.pass} secureTextEntry={true} />

                    <View elevation={5} style={styles.buttonShadow}>
                        <Button color="#D70C9E" title="Sign In" onPress={() => {
                            Alert.alert('You tapped the button!');
                        }} />
                    </View>

                    <View style={[styles.row, styles.m_t_20]}>
                        <View style={[styles.m_r_10, {flex: 1}]}>
                            <Button color="#b4b4b4" title="Sign Up" onPress={() => {
                                Alert.alert('You tapped the button!');
                            }} />
                        </View>
                        <View style={[{flex: 1}]}>
                            <Button color="#b4b4b4" title="Login Facebook" onPress={() => {
                                Alert.alert('You tapped the button!');
                            }} />
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent:'center',
    },
    inputBox: {
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        paddingHorizontal:16,
        fontSize:16,
        color:'#222222',
        borderColor: 'rgba(0, 0, 0, 0.07)',
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 10
    },
    buttonShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
    row:{
        flexDirection: 'row'
    },
    w50: {
       width: 50,
    },
    m_r_10: {
        marginRight: 10
    },
    m_t_20: {
        marginTop: 20
    }
});

export default Login