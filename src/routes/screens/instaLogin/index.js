import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, StatusBar, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../assets/Styles';

const InstaLogin = ({ navigation, route }) => {
    const [mail, setMail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [showPass, setShowPass] = React.useState(true);
    const dispatch = useDispatch();
    const {email, password } = useSelector(state => state.authReducer);

    const validateFormat = (txt) => {
        let reg1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        let reg2 = /^[7-9][0-9]{9}$/;

        return (reg1.test(txt) || reg2.test(txt))
    }

    const validate = () => {
        if (mail.toLowerCase() === email && pass === password)
            return true;
        else return false;
    }

    const handleDisabled=()=>{
        if( mail.length==0 || !validateFormat(mail)|| pass.length == 0){
            return true
        }
        return false
    }


    return (
        <View style={styles.mainLog}>
            <StatusBar barStyle='light-content' />
            <View style={styles.innermain}>
                <Image
                    style={styles.loginLogo}
                    source={require('../../../assets/Images/insta2.png')}
                />
                <View style={styles.inputView}>
                    <TextInput style={styles.inputBar}
                    autoCapitalize ={false}
                        value = {mail}
                        onChangeText={(txt) => {
                            validateFormat(txt)
                            setMail(txt)
                        }}
                        placeholder='Phone number or email address' placeholderTextColor='#5e5e5e' />
                    {validateFormat(mail) || mail == '' ? <Text>{" "}</Text> : <Text style={{ color: 'red', marginLeft: 24 }}>Invalid</Text>}
                    <TextInput onChangeText={(txt) => { setPass(txt) }} style={styles.inputBar} placeholder='Password'
                        secureTextEntry={showPass}
                        textContentType='password' placeholderTextColor='#5e5e5e' />
                    <Text style={styles.loginTxt2}>
                        {"Forgot Password"}
                    </Text>
                    <TouchableOpacity onPress={() => { validate() ? dispatch({type : "SIGNEDIN_OUT", payload : true}) : Alert.alert('Invalid Credentials') }} style={handleDisabled() ? {...styles.loginBt, backgroundColor:'grey'}:styles.loginBt} disabled={handleDisabled()}>
                        <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                            {'Log In'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.loginTxt3}>
                    {"Don't have an account?"}<Text onPress={() => { navigation.navigate('SignUp') }} style={{ color: "#3797f1" }}>{"  Sign Up"}</Text>
                </Text>
            </View>
        </View>
    )
}

export default InstaLogin

