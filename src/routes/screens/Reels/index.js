import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import styles from '../../../assets/Styles';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Video from './video';
import ReelBottom from './reelBottom';

const reelImg = [{ name: "Krishna", img: 'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4'}, { name: "Faiz", img: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-skating-in-a-parking-lot-34550-large.mp4' }, { name: "Rohit", img: 'https://assets.mixkit.co/videos/preview/mixkit-metal-surface-engraved-with-ornaments-34505-large.mp4'}, { name: "Pranav", img: 'https://assets.mixkit.co/videos/preview/mixkit-winter-fashion-cold-looking-woman-concept-video-39874-large.mp4' }]


const _renderItem = (item) => {
    return (<View style={{ flex: 1 }}>
        <Video img={item.img} />
        <View style={{ flexDirection: 'row', marginTop: 20, position: 'absolute' }}>
            <Text style={styles.reelTxt}>
                {"Reels"}
            </Text>
            <TouchableOpacity style={styles.camIcon}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../../../assets/Images/camera.png')} />
            </TouchableOpacity>
        </View>
        <ReelBottom item = {item}/>
    </View>
    )
}
const index = () => {
    const tabBarHeight = useBottomTabBarHeight()
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={reelImg}
                renderItem={({ item }) => _renderItem(item, tabBarHeight)}
                pagingEnabled={true}
            />
        </View>
    )
}

export default index;

