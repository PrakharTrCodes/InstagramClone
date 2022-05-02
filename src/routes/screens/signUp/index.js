import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,KeyboardAvoidingView, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux';
import styles from '../../../assets/Styles';
import { Register } from './action';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUp = ({ navigation }) => {

    const onSignUpClick = () =>{
        let payload = {
            name :  name,
            email : mail,
            userName : userName,
            password : pass
        }
        dispatch(Register(payload));
        navigation.navigate("InstaLogin")
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

    const checkDisable =()=>{
        if( mail.length==0 || !validateFormat(mail)|| pass.length == 0 || name.length == 0 || userName.length == 0){
            return true
        }
        return false
    }

    return (
        <View style={styles.mainSign}>
        {/* <KeyboardAwareScrollView contentContainerStyle={styles.mainSign}> */}
            <Image
                style={styles.instaSignLogo}
                source={require('../../../assets/Images/insta2.png')}
            />
            <ScrollView contentContainerStyle={styles.mainSign}>
            <Text style={styles.logTxt1}>{'Sign up to see photos and videos'}</Text>
            <Text style={styles.logTxt1}>{'from your friends.'}</Text>
            <TouchableOpacity onPress={() => { }} style={styles.loginBt}>
                <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                    {'Log In with Facebook'}
                </Text>
            </TouchableOpacity>
            <Text style={{ color: '#5e5e5e', fontWeight: 'bold', margin: 26 }}>{'⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯     OR     ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯'}</Text>
            <View style={{width:'90%', height : '29%'}}>
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
            
            </View>
            
            <TouchableOpacity disabled ={checkDisable()} onPress={onSignUpClick} style={checkDisable()?{ ...styles.loginBtSign, marginTop: 14, backgroundColor : 'grey'} :{ ...styles.loginBtSign, marginTop: 14 }}>
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
        {/* </KeyboardAwareScrollView> */}
        </ScrollView>
        </View>
    )
}

export default SignUp

