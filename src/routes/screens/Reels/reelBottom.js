import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import styles from '../../../assets/Styles'

const reelBottom = ({item}) => {
    return (
        <View style={styles.reelBottom}>
        <View style={{ flexDirection: 'row', width: '100%', marginTop: 120 }}>
            <TouchableOpacity style={{ ...styles.dpHome, overflow: 'hidden', height: 26, width: 26, alignSelf: 'center', marginHorizontal: 6 }}>
                <Image resizeMode='contain' style={{ height: '100%', width: '100%' }} source={require('../../../assets/Images/myDp.png')} />
            </TouchableOpacity>
            <Text style={{ color: 'white', alignSelf: 'center', marginHorizontal: 6 }}>
                {item.name}
            </Text>
            <TouchableOpacity style={{ paddingHorizontal: 8, borderColor: 'white', justifyContent: 'center', borderWidth: 1, borderRadius: 4, height: 22, alignSelf: 'center', marginHorizontal: 6 }}>
                <Text style={{ color: "white", fontSize: 12 }}>
                    {"Follow"}
                </Text>
            </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'space-between', height: 180 ,right:4}}>
            <TouchableOpacity style={styles.reelsLike}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../../../assets/Images/heart.png')} />
            </TouchableOpacity>
            <Text style={{ color: 'white' }}>
                {"330"}
            </Text>
            <TouchableOpacity style={styles.reelsLike}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../../../assets/Images/comment.png')} />
            </TouchableOpacity>
            <Text style={{ color: 'white' }}>
                {"30"}
            </Text>
            <TouchableOpacity style={styles.reelsLike}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../../../assets/Images/send.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.reelsLike}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../../../assets/Images/kebab.png')} />
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default reelBottom
