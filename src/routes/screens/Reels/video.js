import React, { useRef } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import Video from 'react-native-video';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const {height, width} = Dimensions.get("window")

export default function Reels({img}) {
    const status = getStatusBarHeight()
    const tabBarHeight = useBottomTabBarHeight()
    const ref = useRef();
    
    return (
            <Video source={{uri: img}}
                resizeMode = 'cover'
                repeat = {true}
                paused = {false}   
                ref={(ref) => {
                ref = ref
                }}               
                style={{...styles.backgroundVideo,
                     height : height - tabBarHeight - status}} />
            
            
    )
}
var styles = StyleSheet.create({
    backgroundVideo: {
        width : width
    }
  });