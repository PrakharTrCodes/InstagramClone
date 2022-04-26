import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native'
import NotiHead from './NotiHead'
import Notifs from './notifs';
import SearchData from '../../../assets/Data';
const Notification = () => {
    return (
        <View style={styles.main}>
            <SafeAreaView>
                <NotiHead />
                {/* <TouchableOpacity style={styles.eachNoti}>
                    <View style={styles.dp}>
                        <Image style={{ height: '100%', width: '100%' }} source={require('../../../assets/Images/emilia.jpeg')} />
                    </View>
                    <View style={{ alignSelf: 'center', paddingHorizontal: 10 }}>
                        <Text style={styles.txt}>
                            {"Follow Requests"}
                        </Text>
                        <Text style={styles.txt1}>
                            {"Approve or Ignore requests"}
                        </Text>
                    </View>
                </TouchableOpacity> */}
                <FlatList
                    bounces={true}
                    data={SearchData}
                    renderItem={() => <Notifs />}
                />
            </SafeAreaView>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 8
    },
    eachNoti: {
        flexDirection: 'row'
    },
    dp: {
        height: 48,
        width: 48,
        borderRadius: 50,
        margin: 5,
        overflow: 'hidden'
    },
    txt: {
        color: 'white',
        fontWeight: '600'
    },
    txt1: {
        color: 'grey',
        fontSize: 12
    }
})


