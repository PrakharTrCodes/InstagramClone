import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import styles from '../../../assets/Styles';
import { Register } from './action';

const SignUp = ({ navigation }) => {

    const onSignUpClick = () =>{
        let payload = {
            name :  name,
            email : mail,
            userName : userName,
            pass : pass
        }
        dispatch(Register(payload))
    }

    const validateFormat = (txt) => {
        let reg1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        let reg2 = /^[7-9][0-9]{9}$/;

        return (reg1.test(txt) || reg2.test(txt))
    }
    const [ mail, setMail] = React.useState('');
    const [ pass, setPass] = React.useState('');
    const [name , setName] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const dispatch = useDispatch();


    return (
        <View style={styles.mainSign}>
            <Image
                style={styles.instaSignLogo}
                source={require('../../../assets/Images/insta2.png')}
            />
            <Text style={styles.logTxt1}>{'Sign up to see photos and videos'}</Text>
            <Text style={styles.logTxt1}>{'from your friends.'}</Text>
            <TouchableOpacity onPress={() => { }} style={styles.loginBt}>
                <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                    {'Log In with Facebook'}
                </Text>
            </TouchableOpacity>
            <Text style={{ color: '#5e5e5e', fontWeight: 'bold', margin: 26 }}>{'⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯     OR     ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯'}</Text>
            <TextInput style={styles.inputBarSign}
                onChangeText={(txt) => {
                    validateFormat(txt)
                    setMail(txt)
                }}
                placeholder='Mobile number or Email' placeholderTextColor='#5e5e5e' />
            <TextInput style={styles.inputBarSign}
                onChangeText={(txt) => {
                    setName(txt)
                }}
                placeholder='Full Name' placeholderTextColor='#5e5e5e' />
            <TextInput style={styles.inputBarSign}
                onChangeText={(txt) => {
                    setUserName(txt)
                }}
                placeholder='Username' placeholderTextColor='#5e5e5e' />
            <TextInput style={styles.inputBarSign}
                onChangeText={(txt) => {
                    setPass(txt)
                }}
                placeholder='Password' placeholderTextColor='#5e5e5e' />
            <TouchableOpacity onPress={onSignUpClick} style={{ ...styles.loginBtSign, marginTop: 14 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                    {'Sign Up'}
                </Text>
            </TouchableOpacity>
            <Text style={{ color: '#5e5e5e', marginTop: 12 }}>
                {"By signing up, you agree to our "}<Text style={{ fontWeight: '700' }}>{'Terms , Data'}</Text>
            </Text>
            <Text style={{ color: '#5e5e5e', marginTop: 2, fontWeight: '700' }}>{"Policy and Cookies Policy ."}</Text>
            <Text style={{ color: '#5e5e5e', marginTop: 6 }}>
                {"Have an account?  "}<Text onPress={() => { navigation.navigate('InstaLogin') }} style={{ color: '#3797f1' }}>{'Log in'}</Text>
            </Text>
        </View>
    )
}

export default SignUp

