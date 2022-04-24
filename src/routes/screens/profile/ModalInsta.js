import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { useDispatch } from 'react-redux'
const ModalInsta = (props) => {
    const dispatch = useDispatch()
    return (<Modal
        visible={props.modalVis}
        swipeDirection='down'
        onSwipeComplete={() => { props.setModalVis(!props.modalVis) }}
        onBackdropPress={() => { props.setModalVis(!props.modalVis) }}
        animationType='slide'
        transparent
        animationIn={'bounceIn'}
        animationOut={'bounceInRight'}
        useNativeDriver={true}
        style={{ width: '100%', alignSelf: 'center', justifyContent: 'flex-end', }}
    >
        <View style={styles.modalView}>
            <Image style={styles.line} source={require('../../../assets/Images/line.png')} />
            <TouchableOpacity style={styles.eachBlock}>
                <Image style={styles.modalImg} source={require('../../../assets/Images/gear.png')} />
                <Text style={styles.modTxt} >{"Settings"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachBlock}>
                <Image style={styles.modalImg} source={require('../../../assets/Images/gear.png')} />
                <Text style={styles.modTxt} >{"Archive"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachBlock}>
                <Image style={styles.modalImg} source={require('../../../assets/Images/gear.png')} />
                <Text style={styles.modTxt} >{"Your Activity"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachBlock}>
                <Image style={styles.modalImg} source={require('../../../assets/Images/qr-code.png')} />
                <Text style={styles.modTxt} >{"QR Code"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachBlock}>
                <Image style={styles.modalImg} source={require('../../../assets/Images/save-instagram.png')} />
                <Text style={styles.modTxt} >{"Saved"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachBlock}>
                <Image style={styles.modalImg} source={require('../../../assets/Images/gear.png')} />
                <Text style={styles.modTxt} >{"Close Friends"}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachBlock}>
                <Image style={styles.modalImg} source={require('../../../assets/Images/favorite.png')} />
                <Text style={styles.modTxt} >{"Favorites"}</Text>
            </TouchableOpacity>
            <Text style={{ color: 'white' }} onPress={() => { dispatch({ type: "SIGNEDIN_OUT", payload: false }) }}>Log Out</Text>
        </View>
    </Modal>
    )
}

export default ModalInsta

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "#1a1a1a",
        height: "60%",
        bottom: -100,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingVertical: 12,
        alignItems: 'center'
    },
    line: {
        height: 10,
        width: 30
    },
    eachBlock: {
        height: "10%",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    modTxt: {
        color: 'white',
        margin: 8,
        fontSize: 18
    },
    modalImg:{
        height: 25,
        width: 25,
        margin: 4  
    }

})
