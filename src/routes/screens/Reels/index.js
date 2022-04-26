import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image,FlatList, Dimensions } from 'react-native';
import styles from '../../../assets/Styles';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const reelImg = [ {img : require('../../../assets/Images/ReelImg2.gif')}, {img : require('../../../assets/Images/Reelimg.gif')},  {img : require('../../../assets/Images/ReelImg5.gif')},{img : require('../../../assets/Images/ReelImg3.webp')},{img : require('../../../assets/Images/ReelImg4.gif')}, {img : require('../../../assets/Images/ReelImg6.mp4')}]

const {height} = Dimensions.get("window")

const _renderItem = (item, tabBarHeight) => {
    
    return(
        <View style = {{height: height - tabBarHeight  }}>
        <ImageBackground style={{flex: 1}} source={item.img}>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text style={styles.reelTxt}>
                        {"Reels"}
                    </Text>
                    <TouchableOpacity style={styles.camIcon}>
                        <Image style={{ height: '100%', width: '100%' }} source={require('../../../assets/Images/camera.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.reelBottom}>
                    <View style={{ flexDirection: 'row', width: '100%', marginTop: 120 }}>
                        <TouchableOpacity style={{ ...styles.dpHome, overflow: 'hidden', height: 26, width: 26, alignSelf: 'center', marginHorizontal: 6 }}>
                            <Image resizeMode='contain' style={{ height: '100%', width: '100%' }} source={require('../../../assets/Images/myDp.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: 'white', alignSelf: 'center', marginHorizontal: 6 }}>
                            {"rcbian"}
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
            </ImageBackground>
            </View>
    )
}
const index = () => {
    const tabBarHeight = useBottomTabBarHeight()
    return (
        <View style={{ flex: 1 }}>
            <FlatList
            data = {reelImg}
            renderItem = {({item})=>_renderItem(item,tabBarHeight)}
            pagingEnabled = {true}
            />
        </View>
    )
}

export default index;

