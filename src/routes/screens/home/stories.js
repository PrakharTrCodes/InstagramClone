import React, {useState} from 'react'
import {  Text, View, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import SearchData from '../../../assets/Data';
import styles from '../../../assets/Styles';


const stories = () => {
    const [col, setCol] = useState('#ff5f4b')

    const _renderStories = ({item}) => {
        return (
        <View style = {styles.storiesMain}>
        <TouchableOpacity activeOpacity={0.6} onPress= {()=>{}} style ={{...styles.stories, borderColor: col}}>
            <Image
                style = {{ height: "100%", width : " 100%", borderColor: "black", borderWidth: 2, borderRadius: 100/2}}
                source = {{ uri: item.url2 }}
            /> 
        </TouchableOpacity>
        </View>
        
        )  
    }
    return (
       <FlatList
       horizontal
       data = {SearchData}
       renderItem = {_renderStories}
       showsHorizontalScrollIndicator = {false}
       />
    )
}

export default stories;


