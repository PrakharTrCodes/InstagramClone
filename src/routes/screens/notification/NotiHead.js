import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NotiHead = () => {
    return (
        <View style = {styles.head}>
            <Text style = {styles.txt}>
                {"Activity"}
            </Text>
        </View>
    )
}

export default NotiHead;

const styles = StyleSheet.create({
    head: {
        backgroundColor : 'black',
        paddingHorizontal: 10,
        marginVertical:10
    },
    txt: {
        color : "white",
        fontSize: 20,
        fontWeight : 'bold'
    }
})
