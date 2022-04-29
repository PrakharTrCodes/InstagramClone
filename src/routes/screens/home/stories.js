import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react'
import {  Text, View, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import SearchData from '../../../assets/Data/UserData';
import styles from '../../../assets/Styles';
import StoryScreen from './StoryScreen';


const stories = () => {
    const navigation = useNavigation();
    const [col, setCol] = useState('#ff5f4b')
    const [modVis, setModVis] = useState(false)


    const _renderStories = ({item}) => {
        return (
        <View style = {styles.storiesMain}>
        <TouchableOpacity activeOpacity={0.6} onPress= {()=>{setModVis(!modVis);
        navigation.navigate("StoryScreen", {modVis, setModVis, item})}} style ={{...styles.stories, borderColor: col}}>
            <Image
                style = {{ height: "100%", width : " 100%", borderColor: "black", borderWidth: 2, borderRadius: 100/2}}
                source = {{ uri: item.url2 }}
            /> 
        </TouchableOpacity>
        {/* <StoryScreen modVis = {modVis} setModVis = {setModVis}  item = {item}/> */}
        </View>
        
        )  
    }
    return (
       <FlatList
       bounces ={false}
       horizontal
       data = {SearchData}
       renderItem = {_renderStories}
       showsHorizontalScrollIndicator = {false}
       />
    )
}

export default stories;


