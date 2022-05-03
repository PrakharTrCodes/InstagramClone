import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../../../assets/Styles';

const Tab = createMaterialTopTabNavigator();

function Chats() {
    return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
        <TouchableOpacity style = {styles.messCard}>
            <View style = {styles.messImageView}>
                
            </View>
        </TouchableOpacity>
    </ScrollView>
    )
  }

function Calls() {
return (<ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
      <Text style={{ color: "white" }}>gfd</Text>
    </ScrollView>
    )
}


export default function Toptab() {
    return (
      <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: 'black' },  tabBarLabelStyle :{color : "white"}, tabBarIndicatorStyle: { backgroundColor: 'white' } }}>
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Calls" component={Calls} />
      </Tab.Navigator>
    );
  }