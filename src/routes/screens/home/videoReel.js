import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Video from 'react-native-video';

const videoReel = () => {
    return (
        <Video source={{ uri: 'https://assets.mixkit.co/videos/preview/mixkit-winter-fashion-cold-looking-woman-concept-video-39874-large.mp4' }}
                    resizeMode='cover'
                    repeat={true}
                    paused={false}
                    ref={(ref) => {
                        ref = ref
                    }}
                    style={styles.backgroundVideo
                    } />
    )
}

export default videoReel

const styles = StyleSheet.create({
    backgroundVideo:{
        flex: 1
    }
})
