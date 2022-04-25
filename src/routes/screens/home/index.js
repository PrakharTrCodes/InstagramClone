import React, { useRef } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView, StatusBar, TextInput, FlatList, ImageBackground } from 'react-native'
import SearchData from '../../../assets/Data';
import styles from '../../../assets/Styles';
import Stories from './stories';
import { useDispatch, useSelector } from 'react-redux';

export default function Home({ navigation }) {
    const Ref = useRef(null)
    let dp = '../../../assets/Images/myDp.png'
    const { Data } = useSelector((store) => store.UsersListReducer);
    const dispatch = useDispatch();
    const onProPress = (item) => {
        navigation.navigate("User", item = { item });
    }
    const onPressMess = () => {
        navigation.navigate("Chat");
    }

    const onPressLike = (i) => {
        Data[i].toggle = !Data[i].toggle
        dispatch({ type: 'LIKE_UNLIKE', payload: { Data } })
    }

    const _renderItem = ({ item }) => {
        return (
            <>
                <View style={styles.cardHead}>
                    <TouchableOpacity onPress={() => { onProPress(item) }} style={styles.proPressBtn}>
                        <Image source={{ uri: item.url2 }} style={styles.dpHome} />
                        <Text style={styles.cardTitle}>{item.name}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} >
                        <Image style={{ height: '100%', width: '100%' }} source={require('../../../assets/Images/kebab.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.postVeiw}>
                    <Image resizeMode='contain' style={{ height: 294, width: '100%' }} source={{ uri: item.url1 }} />
                </View>
                <View style={styles.postBottom}>
                    <TouchableOpacity style={styles.like} onPress={() => {
                        let i = Data.findIndex(x => item == x)
                        onPressLike(i)
                    }}>
                        <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={item.toggle ? require('../../../assets/Images/like.png') : require('../../../assets/Images/heart.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 6, marginTop: 4, }}>
                        <Image style={{ height: 20, width: 20 }} source={require('../../../assets/Images/comment.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 6, marginTop: 4, }}>
                        <Image style={{ height: 18, width: 18 }} source={require('../../../assets/Images/send.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.comments}>
                    <Text style={{ color: 'white' }}>{item.likes}</Text>
                    <View style={styles.commentsec}>
                        <Image style={{ ...styles.dp, height: 26, width: 26 }} source={require(dp)} />
                        <TextInput placeholderTextColor="white" placeholder='Write a comment' />
                    </View>
                </View>
            </>
        )
    }


    return (
        <SafeAreaView style={styles.main}>
            <StatusBar barStyle='light-content' />
            <View style={styles.mainHead}>
                <Image
                    style={{ width: 98, height: 24, left: 4 }}
                    source={require('../../../assets/Images/insta2.png')}
                />
                <TouchableOpacity>
                    <Image style={{ height: 19, width: 19, left: 230, position: 'absolute' }} source={require('../../../assets/Images/add.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressMess} >
                    <Image style={{ height: 19, width: 19, left: 258, position: 'absolute' }} source={require('../../../assets/Images/messenger.png')} />
                </TouchableOpacity>
            </View>
            <Stories />
            <FlatList
                ref={Ref}
                data={SearchData}
                renderItem={_renderItem}
                ListFooterComponent={() => {
                    return (<View style={{ width: "100%", height: 220 }}><ImageBackground style={{ height: "100%", width: "100%", justifyContent: 'flex-end' }} source={require('../../../assets/Images/endView.jpeg')}>
                        <Text onPress={() => { Ref.current.scrollToIndex({ index: 0 }) }} style={{ color: "blue", textAlign: 'center', bottom: 16 }}>{"View Older posts"}</Text>
                    </ImageBackground>
                    </View>)
                }}
            />
        </SafeAreaView>
    )
}

