import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TouchableOpacity, Image, FlatList, Dimensions, StatusBar } from 'react-native';
import styles from '../../../assets/Styles';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Videos from './video';
import ReelBottom from './reelBottom';
import { useSelector, useDispatch } from 'react-redux';
const {height, width} = Dimensions.get('screen');
import { getStatusBarHeight } from 'react-native-status-bar-height';
import reelImg from '../../../assets/Data/ReelsData'




const _renderItem = (item, tabBarHeight,  status) => {
    return (
    <View style={{flex : 1}}>
        <Videos img={item.img} />
        <View style={{ flexDirection: 'row', marginTop: 0, position: 'absolute' }}>
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
const index = ({navigation}) => {
    const status = getStatusBarHeight()
   
    // React.useEffect(() => {
    //     navigation.addListener('focus', () => {
    //         dispatch({type : 'REEL_PLAYPAUSE', payload : true})
    //     });
        
    //   }, []);
    
    //   React.useEffect(() => {
    //     navigation.addListener('blur', () => {
    //         dispatch({type : 'REEL_PLAYPAUSE', payload : false})
    //     });
    
    //   }, []);
    const tabBarHeight = useBottomTabBarHeight()
    return (<SafeAreaView style = {{backgroundColor : 'black', flex : 1}}>
            <FlatList
                data={reelImg}
                renderItem={({ item }) => _renderItem(item, tabBarHeight,  status)}
                pagingEnabled={true}
            />
            </SafeAreaView>
    )
}

export default index;

