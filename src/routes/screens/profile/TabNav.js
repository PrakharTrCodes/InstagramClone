import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../../../assets/Styles';
import SearchData from '../../../assets/Data';

const Tab = createMaterialTopTabNavigator();

function ProfilePosts() {
  return (<ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <TouchableOpacity activeOpacity={0.8} style={styles.imgSearchTouch}>
        <Image style={{ height: "100%", width: "100%" }} source={{ uri: SearchData[4].url2 }} />
      </TouchableOpacity >
      <TouchableOpacity activeOpacity={0.8} style={styles.imgSearchTouch}>
        <Image style={styles.searchImg} source={{ uri: SearchData[5].url2 }} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.imgSearchTouch}>
        <Image style={styles.searchImg} source={{ uri: SearchData[0].url2 }} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.imgSearchTouch}>
        <Image style={styles.searchImg2} source={{ uri: SearchData[6].url2 }} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.imgSearchTouch}>
        <Image style={styles.searchImg} source={{ uri: SearchData[7].url2 }} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.imgSearchTouch}>
        <Image style={styles.searchImg} source={{ uri: SearchData[8].url2 }} />
      </TouchableOpacity>
    </View>
  </ScrollView>
  )
}

function Tags() {
  return (<View style={{ flex: 1, backgroundColor: 'black' }}>
    <Text style={{ color: "white" }}>gfd</Text>
  </View>
  )
}

export default function TabNav() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: 'black' }, tabBarShowLabel: false, tabBarIndicatorStyle: { backgroundColor: 'white' } }}>
      <Tab.Screen name="ProfilePosts" component={ProfilePosts} options={{ tabBarIcon: () => <Image resizeMode='contain' style={{ height: 20, width: 20 }} source={require('../../../assets/Images/grid.png')} /> }} />
      <Tab.Screen name="Tags" component={Tags} options={{ tabBarIcon: () => <Image resizeMode='contain' style={{ height: 26, width: 26, }} source={require('../../../assets/Images/tagI.png')} /> }} />
    </Tab.Navigator>
  );
}