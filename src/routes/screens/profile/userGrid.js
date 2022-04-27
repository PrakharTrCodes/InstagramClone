import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../../../assets/Styles';

const UserGrid = ({ item }) => {
    return (
        <View style={styles.proHead}>
            <View style={styless.inProHeadView}>
                <Image style={styles.dp} source={{ uri: item.url2 }} />
                <View>
                    <Text style={styless.userTxt}>35</Text>
                    <Text style={styless.userTxt}>Posts</Text>
                </View>
                <View>
                    <Text style={styless.userTxt}>325</Text>
                    <Text style={styless.userTxt}>Followers</Text>
                </View>
                <View style={{ marginRight: 14 }}>
                    <Text style={styless.userTxt}>325</Text>
                    <Text style={styless.userTxt}>Following</Text>
                </View>
            </View>
            <Text style={styless.userProp}>
                {item.name}
            </Text>
            <Text style={styless.userProp}>
                {item?.occ}
            </Text>
            <Text style={styless.userProp}>
                {"Carpadiem"}
            </Text>
            <View style={styles.threeBtn}>
                <TouchableOpacity onPress={() => { }} style={{ ...styles.followBt, marginTop: 14 }}>
                    <Text style={styless.editTxt}>
                        {'Edit Profile'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styless.addImg} source={require('../../../assets/Images/add-user.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserGrid

const styless = StyleSheet.create({
    menu: {
        height: 20,
        width: 20,
        marginTop: 40
    },
    inProHeadView: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: 6
    },
    userTxt: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '500'
    },
    userProp: {
        color: 'white',
        marginLeft: 8
    },
    editTxt: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1
    },
    addImg: {
        height: 26,
        width: 26,
        alignSelf: 'center',
        margin: 8
    }
})
