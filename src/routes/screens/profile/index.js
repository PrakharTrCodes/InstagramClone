import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, SafeAreaView, Modal } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../../assets/Styles';
import ModalInsta from './ModalInsta';
import TabNav from './TabNav';
import ImagePicker from 'react-native-image-crop-picker';


export default function Profile({ navigation, route }) {

    const {dp} = useSelector(state =>state.UsersListReducer);
    const {name, userName} = useSelector((store) => store.authReducer);
    const dispatch = useDispatch()
    const [modalVis, setModalVis] = React.useState(false);
    console.log('In profile', route);
    return (

    <View
        style={styles.mainPro}>
        <View style={{  backgroundColor: '#1a1a1a', flexDirection: 'row', }}>
            <Text style={{ color: 'white', marginTop: 40, margin: 14 }}>{userName}</Text>
            <TouchableOpacity onPress={() => { setModalVis(!modalVis) }} style={{ marginLeft:'auto', right:10}}>
                <Image style={{ height: 20, width: 20, marginTop: 40 }} source={require('../../../assets/Images/menu.png')} />
            </TouchableOpacity>
        </View>
        <View style={styles.proHead}>
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 6 }}>


                <View style={styles.dp} >
                <Image style={{ width:'100%', height:'100%'}} resizeMode = 'cover' source ={{uri:dp}}/>
                    </View>      


                <View>
                    <Text style={styles.proTxt}>35</Text>
                    <Text style={styles.proTxt}>Posts</Text>
                </View>
                <View>
                    <Text style={styles.proTxt}>325</Text>
                    <Text style={styles.proTxt}>Followers</Text>
                </View>
                <View style={{ marginRight: 14 }}>
                    <Text style={styles.proTxt}>325</Text>
                    <Text style={styles.proTxt}>Following</Text>
                </View>
            </View>
            <Text style={{ color: 'white', marginLeft: 8 }}>
                {name}
            </Text>
            <Text style={{ color: 'white', marginLeft: 8 }}>
                {"Engineer"}
            </Text>
            <Text style={{ color: 'white', marginLeft: 8 }}>
                {"CarpaDiem"}
            </Text>
            <View style={styles.threeBtn}>
                <TouchableOpacity onPress={() => {
                    ImagePicker.openPicker({
                    width: 300,
                    height: 400,
                    cropping: true
                    }).then(image => {
                    console.log(image);
                    dispatch({type :"SET_DP", payload : image.path})
                    }).catch((err) =>console.log("Err", err))}} style={{ ...styles.followBt, marginTop: 14 }}>
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
