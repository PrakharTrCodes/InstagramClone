import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import styles from '../../../assets/Styles'

const reelBottom = ({ item }) => {
    const navigation =  useNavigation();
    console.log("navigation", navigation)
    const [toggle, setToggle] = React.useState();
    const onNamePress = () =>{
        navigation.navigate("User" , item = {item})
    }
    return (
        <View style={styles.reelBottom}>
            <View style={{ flexDirection: 'row', width: '100%', marginTop: 120 }}>
                <TouchableOpacity style={{ ...styles.dpHome, overflow: 'hidden', height: 28, width: 28, alignSelf: 'center', marginHorizontal: 6 }}>
                    <Image resizeMode='contain' style={{ height: '100%', width: '100%' }} source={require('../../../assets/Images/myDp.png')} />
                </TouchableOpacity>
                <TouchableOpacity style ={{ alignSelf: 'center'}} onPress={onNamePress}>
                    <Text style={{ color: 'white', marginHorizontal: 6, fontSize: 16 }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal: 8, borderColor: 'white', justifyContent: 'center', borderWidth: 1, borderRadius: 4, height: 22, alignSelf: 'center', marginHorizontal: 6 }}>
                    <Text style={{ color: "white", fontSize: 12 }}>
                        {"Follow"}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'space-between', height: 180, right: 4 }}>
                <TouchableOpacity style={styles.reelsLike} onPress={() => { setToggle(!toggle) }}>
                    <Image style={{ height: '100%', width: '100%' }} source={toggle ? require('../../../assets/Images/like.png') : require('../../../assets/Images/heart.png')} />
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

export default reelBottom;
