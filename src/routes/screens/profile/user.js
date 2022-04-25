import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView,  } from 'react-native'
import styles from '../../../assets/Styles'
import TabNav from './TabNav'
import UserGrid from './userGrid'
import userGrid from './userGrid'

const User = ({navigation, route}) => {
    console.log("User", route.params.item)
    const {item} = route.params;
    return (
        <View 
        style={styles.mainPro}>
        <View style = {styless.userHead}>
            <Text style = {styless.headTxt}>{"emilia@30"}</Text>
            <TouchableOpacity onPress={()=>{setModalVis(!modalVis)}} style={{left:250}}>
                <Image style ={styless.menu} source={require('../../../assets/Images/kebab.png')} />
            </TouchableOpacity>
        </View>
       <UserGrid item = {item}/>
   <TabNav />
   </View>
   
    )
}

export default User

const styless = StyleSheet.create({
    userHead :{
        height:70,
        backgroundColor:'#1a1a1a',
        flexDirection:'row'
    },
    headTxt : {
        color:'white',
        marginTop:40,
        margin:14
    },
    menu:{
        height:20,
        width:20,
        marginTop:40
    }
})