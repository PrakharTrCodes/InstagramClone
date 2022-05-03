import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { useSelector } from 'react-redux'
import styles from '../../../assets/Styles'
import Toptab from './topTab'

const index = () => {
    const {name, userName} = useSelector((store) => store.authReducer);const status = getStatusBarHeight()
    return (
        <View style = {styles.chatMain}>
            <View style = {{marginTop : status, flex : 1, backgroundColor : 'black'}}>
                <View style = {styles.chatHead}>
                    <Text style ={styles.chatTxt}>
                        {userName}
                    </Text>
                    <TouchableOpacity style = {{height : 30, width : 30, alignSelf :'center', left : 310, position :'absolute'}}>
                        <Image style = {styles.vidCam} source ={require('../../../assets/Images/video.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style = {{height : 30, width : 30, alignSelf :'center',left:350, position :'absolute'}}>
                        <Image style = {styles.vidCam} source ={require('../../../assets/Images/video.png')}/>
                    </TouchableOpacity>
                </View>
                <Toptab />
            </View>
        </View>
    )
}

export default index


