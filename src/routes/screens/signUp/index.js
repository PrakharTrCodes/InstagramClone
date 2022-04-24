import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from '../../../assets/Styles';

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.mainSign}>
            <Image
                style={{ width: '60%', height: '10%', alignSelf: 'center', marginTop: 70 }}
                source={require('../../../assets/Images/insta2.png')}
            />
            <Text style={{ color: '#5e5e5e', fontSize: 16, fontWeight: 'bold' }}>{'Sign up to see photos and videos'}</Text>
            <Text style={{ color: '#5e5e5e', fontSize: 16, fontWeight: 'bold' }}>{'from your friends.'}</Text>
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
                    validateFormat(txt)
                    setMail(txt)
                }}
                placeholder='Full Name' placeholderTextColor='#5e5e5e' />
            <TextInput style={styles.inputBarSign}
                onChangeText={(txt) => {
                    validateFormat(txt)
                    setMail(txt)
                }}
                placeholder='Username' placeholderTextColor='#5e5e5e' />
            <TextInput style={styles.inputBarSign}
                onChangeText={(txt) => {
                    validateFormat(txt)
                    setMail(txt)
                }}
                placeholder='Password' placeholderTextColor='#5e5e5e' />
            <TouchableOpacity onPress={() => { }} style={{ ...styles.loginBtSign, marginTop: 14 }}>
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


