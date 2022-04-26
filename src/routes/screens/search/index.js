import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import SearchData from '../../../assets/Data';
import styles from '../../../assets/Styles';

export default function Search() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={styles.mainSearch}>
            <ScrollView>
                <TextInput style={styles.searchBar} placeholderTextColor='#5e5e5e' placeholder='Search' />
                <View style={styles.eachParentView}>
                    <View style={{ flexDirection: 'row', width: windowWidth - windowWidth / 3, flexWrap: 'wrap' }}>
                        <TouchableOpacity style={styles.imgSearchTouch}>
                            <Image style={styles.searchImg2} source={{ uri: SearchData[0].url2 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imgSearchTouch}>
                            <Image style={styles.searchImg} source={{ uri: SearchData[1].url2 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imgSearchTouch}>
                            <Image style={styles.searchImg} source={{ uri: SearchData[2].url2 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imgSearchTouch}>
                            <Image style={styles.searchImg} source={{ uri: SearchData[3].url2 }} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ width: windowWidth / 3, height: windowHeight / 3, padding: 1 }}>
                        <Image style={styles.searchImg2} source={{ uri: SearchData[0].url1 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.eachParentView}>
                    <TouchableOpacity style={styles.imgSearchTouch}>
                        <Image style={{ height: "100%", width: "100%" }} source={{ uri: SearchData[4].url2 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imgSearchTouch}>
                        <Image style={styles.searchImg} source={{ uri: SearchData[5].url2 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imgSearchTouch}>
                        <Image style={styles.searchImg} source={{ uri: SearchData[0].url2 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imgSearchTouch}>
                        <Image style={styles.searchImg2} source={{ uri: SearchData[6].url2 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imgSearchTouch}>
                        <Image style={styles.searchImg} source={{ uri: SearchData[7].url2 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.imgSearchTouch}>
                        <Image style={styles.searchImg} source={{ uri: SearchData[8].url2 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.eachParentView}>
                    <TouchableOpacity style={{ width: windowWidth / 3, height: windowHeight / 3, padding: 1 }}>
                        <Image style={styles.searchImg2} source={{ uri: SearchData[1].url1 }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', width: windowWidth - windowWidth / 3, flexWrap: 'wrap' }}>
                        <TouchableOpacity style={styles.imgSearchTouch}>
                            <Image style={styles.searchImg2} source={{ uri: SearchData[10].url2 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imgSearchTouch}>
                            <Image style={styles.searchImg} source={{ uri: SearchData[11].url1 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imgSearchTouch}>
                            <Image style={styles.searchImg} source={{ uri: SearchData[5].url1 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imgSearchTouch}>
                            <Image style={styles.searchImg} source={{ uri: SearchData[2].url1 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

