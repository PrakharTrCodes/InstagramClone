import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import styles from '../../../assets/Styles';

const Splash = ({navigation}) => {
    setTimeout(()=>{navigation.navigate("InstaLogin")}, 2000)
    return (
        <View style = {styles.Splash}>
            <Image style ={{height:'100%', width:'100%'}} source = {require('../../../assets/Images/logoForSplash.png')}/>
        </View>
    )
}

export default Splash;


