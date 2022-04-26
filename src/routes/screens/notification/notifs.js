import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const Notifs = () => {
    return (
        <TouchableOpacity style={styles.notiView}>
            <View style={styles.dp}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../../../assets/Images/emilia.jpeg')} />
            </View>
            <View style={{ alignSelf: 'center', paddingHorizontal: 10 }}>
                <Text style={styles.txt}>
                    {"i.s._manendra likes your photo"}
                </Text>
            </View>
            <View style = { styles.post}>
                <Image style = {{height: '100%', width : '100%'}} source =  {require('../../../assets/Images/myDp.png')} />
            </View>
        </TouchableOpacity>
    )
}

export default Notifs

const styles = StyleSheet.create({
    notiView: {
        backgroundColor: 'black',
        flexDirection : "row"
    },
    dp:{
        height: 48,
        width: 48,
        borderRadius: 50,
        margin: 5,
        overflow:'hidden'
    },
    txt:{
        color : 'white',
        fontWeight : '600'
    },
    txt1 : {
        color : 'grey',
        fontSize : 12
    },
    post:{
        height: 48,
        width: 48,
        alignSelf :'center',
        marginLeft : 30
    }
})
