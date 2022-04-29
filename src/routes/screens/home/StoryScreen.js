import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions,Image } from 'react-native';
import Modal from 'react-native-modal';
import VideoReel from './videoReel';

const { height, width } = Dimensions.get('window')

const StoryScreen = ({navigation, route}) => {
    const {modVis, setModVis, item} = route.params
    console.log("StoryScreen me ", modVis, setModVis, item)
    return (
        <View style = {{flex:1, backgroundColor : 'black'}}>
        <Modal
            style={{ backgroundColor: "black", width: "100%", height: "100%", right : 20 }}
            isVisible={true}
            onSwipeComplete={() => { navigation.navigate("Home")  }}
            onBackdropPress={() => { navigation.navigate("Home") }}
            animationType='slide'
        >
            <TouchableOpacity activeOpacity={0} style={{ flex: 1 }} onPress={() => {  navigation.navigate("Home") }}>
                <TouchableOpacity style={{ zIndex: 1, position: 'absolute', top: 25,  width: width, flexDirection: 'row',alignItems: 'center', }}>
                    <Image style={styles.profile} source={{uri : item.url2}}/>
                    <Text style={{ color: '#FFFFFF', fontWeight: '700', }}>
                        {item.name}
                    </Text>
                    <Text style={{ color: '#FFFFFF99', fontWeight: '700', marginLeft: 10, }}>{'2h'} </Text>
                </TouchableOpacity>
                <VideoReel />
            </TouchableOpacity>
        </Modal>
        </View>
    )
}

export default StoryScreen

const styles = StyleSheet.create({
    backgroundVideo: {
        flex: 1
    },
    profile: {
        height: 40,
        width: 40,
        marginHorizontal: 10,
        borderRadius: 20,
    },
})
