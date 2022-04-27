import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import VideoPlayer from 'react-native-video-player'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function video({img}) {
    const {height, width} = Dimensions.get("window")
    const tabBarHeight = useBottomTabBarHeight()
    return (
            <VideoPlayer
                video={{ uri: img }}
                videoWidth={width}
                videoHeight={height - tabBarHeight}
                thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                autoplay = {true}
                loop = {true}
                hideControlsOnStart = {true}
            />
    )
}
