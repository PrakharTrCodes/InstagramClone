import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, SafeAreaView, Modal } from 'react-native'
import styles from '../../../assets/Styles';
import ModalInsta from './ModalInsta';
import TabNav from './TabNav';


export default function Profile({ navigation, route }) {
    let dp = '../../../assets/Images/myDp.png'

    const [modalVis, setModalVis] = React.useState(false);
    console.log('In profile', route);
    return (<View
        style={styles.mainPro}>
        <View style={{ height: 70, backgroundColor: '#1a1a1a', flexDirection: 'row' }}>
            <Text style={{ color: 'white', marginTop: 40, margin: 14 }}>{"emilia@30"}</Text>
            <TouchableOpacity onPress={() => { setModalVis(!modalVis) }} style={{ left: 250 }}>
                <Image style={{ height: 20, width: 20, marginTop: 40 }} source={require('../../../assets/Images/menu.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.proHead}>
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 6 }}>
                <Image style={styles.dp} source={require(dp)} />
                <View>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500' }}>35</Text>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500' }}>Posts</Text>
                </View>
                <View>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500' }}>325</Text>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500' }}>Followers</Text>
                </View>
                <View style={{ marginRight: 14 }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500' }}>325</Text>
                    <Text style={{ textAlign: 'center', color: 'white', fontWeight: '500' }}>Following</Text>
                </View>
            </View>
            <Text style={{ color: 'white', marginLeft: 8 }}>
                {"Prakhar Tripathi"}
            </Text>
            <Text style={{ color: 'white', marginLeft: 8 }}>
                {"Engineer"}
            </Text>
            <Text style={{ color: 'white', marginLeft: 8 }}>
                {"CarpaDiem"}
            </Text>
            <View style={styles.threeBtn}>
                <TouchableOpacity onPress={() => { }} style={{ ...styles.followBt, marginTop: 14 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                        {'Edit Profile'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={{ height: 26, width: 26, alignSelf: 'center', margin: 8 }} source={require('../../../assets/Images/add-user.png')} />
                </TouchableOpacity>
            </View>
        </View>
        <TabNav />
        <ModalInsta modalVis={modalVis} setModalVis={setModalVis} />
    </View>

    )
}
