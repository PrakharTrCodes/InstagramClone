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
            <View style={styles.reelsBottUp}>
                <TouchableOpacity style={{ ...styles.dpHome, overflow: 'hidden', height: 28, width: 28, alignSelf: 'center', marginHorizontal: 6 }}>
                    <Image resizeMode='contain' style={styles.reelBottImg} source={{uri : item.dp}} />
                </TouchableOpacity>
                <TouchableOpacity style ={{ alignSelf: 'center'}} onPress={onNamePress}>
                    <Text style={styles.reelName}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.followBtn}>
                    <Text style={styles.followTxt}>
                        {"Follow"}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.likeCommShare}>
                <TouchableOpacity style={styles.reelsLike} onPress={() => { setToggle(!toggle) }}>
                    <Image style={styles.reelBottImg} source={toggle ? require('../../../assets/Images/like.png') : require('../../../assets/Images/heart.png')} />
                </TouchableOpacity>
                <Text style={{...styles.reelBtmTxt}}>
                    {toggle ? "331": "330"}
                </Text>
                <TouchableOpacity style={styles.reelsLike}>
                    <Image style={styles.reelBottImg} source={require('../../../assets/Images/comment.png')} />
                </TouchableOpacity>
                <Text style={styles.reelBtmTxt}>
                    {"30"}
                </Text>
                <TouchableOpacity style={styles.reelsLike}>
                    <Image style={styles.reelBottImg} source={require('../../../assets/Images/send.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.reelsLike}>
                    <Image style={styles.reelBottImg} source={require('../../../assets/Images/kebab.png')} />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default reelBottom;
