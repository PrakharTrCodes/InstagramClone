import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, StatusBar, TextInput } from 'react-native'
import { useDispatch } from 'react-redux';
import styles from '../../../assets/Styles';

const InstaLogin = ({ navigation, route }) => {
    const [mail, setMail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [showPass, setShowPass] = React.useState(true);
    const dispatch = useDispatch();

    const validateFormat = (txt) => {
        // setMail()
        let reg1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        let reg2 = /^[7-9][0-9]{9}$/;

        return (reg1.test(txt) || reg2.test(txt))
    }

    const validate = () => {
        if (mail.toLowerCase() === 'archanaprakhar30@gmail.com' && pass === 'Abc@3011#')
            return true;
        else return false;
    }


    return (
        <View style={styles.mainLog}>
            <StatusBar barStyle='light-content' />
            <View style={styles.innermain}>
                <Image
                    style={{ width: '80%', height: '30%', alignSelf: 'center', }}
                    source={require('../../../assets/Images/insta2.png')}
                />
                <View style={styles.inputView}>
                    <TextInput style={styles.inputBar}
                        // value = {mail}
                        onChangeText={(txt) => {
                            validateFormat(txt)
                            setMail(txt)
                        }}
                        placeholder='Phone number, username or email address' placeholderTextColor='#5e5e5e' />
                    {validateFormat(mail) ? <Text>{" "}</Text> : <Text style={{ color: 'red', marginLeft: 24 }}>Invalid</Text>}
                    <TextInput onChangeText={(txt) => { setPass(txt) }} style={styles.inputBar} placeholder='Password'
                        secureTextEntry={showPass}
                        textContentType='password' placeholderTextColor='#5e5e5e' />
                    <Text style={{ color: '#3797f1', textAlign: 'right', right: 19, marginTop: 3, }}>
                        {"Forgot Password"}
                    </Text>
                    <TouchableOpacity onPress={() => { validate() ? dispatch({type : "SIGNEDIN_OUT", payload : true}) : Alert.alert('Invalid Credentials') }} style={styles.loginBt}>
                        <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                            {'Log In'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: "white", textAlign: 'center' }}>
                    {"Don't have an account?"}<Text onPress={() => { navigation.navigate('SignUp') }} style={{ color: "#3797f1" }}>{"  Sign Up"}</Text>
                </Text>
            </View>
        </View>
    )
}

export default InstaLogin

