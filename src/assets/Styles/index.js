import {StyleSheet,Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 10,
    },
    commentsec: {
        flexDirection: 'row'
    },
    stories:{
        height : 70,
        width : 70,
        borderWidth: 2,
        borderRadius: 100/2,
        overflow: 'hidden'
    },
    storiesMain:{
        height : 110,
        marginLeft: 10
    },
    mainHead: {
        flexDirection: 'row',
        height: 42,
    },
    headText: {
        alignSelf: 'center',
        left: 22,
        fontWeight: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    option: {
        alignSelf: 'center',
        marginLeft: 360,
        position: "absolute",
        height: 20,
        width: 20
    },
    cardTitle: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16,
        marginLeft: 4
    },
    cardHead: {
        paddingHorizontal:10,
        flexDirection: 'row',
    },
    dpHome: {
        height: 31,
        width: 31,
        borderRadius: 50,
        margin: 5,
    },
    postBottom: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 1,
        paddingHorizontal: 8
    },
    like: {
        marginTop:4,
        marginHorizontal: 6 
    },
    postVeiw: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 4,
    },
    comments: {
        margin: 8
    },
    comment:{
        marginLeft: 10
    }, 
    share : {
        marginLeft: 10
    },
    Splash:{
        flex: 1,
        backgroundColor:'black'
    },
    mainLog: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'black'
    },
    logo: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 40,
        alignSelf: 'center',
    },
    inputBar: {
        backgroundColor: '#111111',
        flexDirection: 'row',
        borderWidth: 1,
        width: '90%',
        height: '17%',
        marginHorizontal: 18,
        paddingHorizontal: 8,
        marginVertical: 6,
        color: 'white',
        borderRadius: 6,
        letterSpacing: 0.4
    },
    innermain: {
        borderWidth: 2,
        width: '98%',
        height: '65%',
    },
    inputView: {
        borderWidth: 2,
        marginTop: 4,
    },
    loginBt: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40, backgroundColor: '#3797f1',
        width: '90%',
        height: 40,
        alignSelf: 'center',
        borderRadius: 6
    },
    mainPro : {
        flex : 1,
        backgroundColor:'black'
    },
    dp: {
        height: 100,
        width: 100,
        borderRadius: 50,
        margin: 8,
        marginLeft:2,
    },
    proHead:{
        backgroundColor:'#1a1a1a',
    },
    threeBtn:{
        flexDirection:'row',
        alignItems: 'center',

    },
    followBt: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 26,
        backgroundColor: '#000000',
        width: '84%',
        height: 40,
        alignSelf: 'center',
        borderRadius: 5,
        margin:6,
    },
    sticky:{
        backgroundColor:'#1a1a1a',
        flexDirection:'row',
        width:'100%',
        height:40
    },
    mainSign: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    inputBarSign: {
        backgroundColor: '#111111',
        flexDirection: 'row',
        borderWidth: 1,
        width: '90%',
        height: '5%',
        marginHorizontal: 18,
        paddingHorizontal: 8,
        marginVertical: 6,
        color: 'white',
        borderRadius: 6,
        letterSpacing: 0.4
    },
    loginBtSign: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 26,
        backgroundColor: '#3797f1',
        width: '90%',
        height: 40,
        alignSelf: 'center',
        borderRadius: 6
    },
    mainSearch: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: 50
    },
    searchBar: {
        backgroundColor: '#111111',
        height: 30,
        width: '96%',
        borderRadius: 8,
        alignSelf: 'center',
        paddingHorizontal: 8,
        color: 'white',
    },
    imgSearchTouch:{
    width: windowWidth / 3,
    height: windowHeight / 6, 
    padding: 1 
    },
    searchImg:{
        height: "100%",
        width: "100%",
        margin: 1 
    },
    searchImg2:{
        height: "100%",
        width: "100%"
    },
    reelTxt:{
        marginTop: 32,
        margin: 8,
        fontSize:18,
        color : 'white',
        fontWeight : '600'
    },
    camIcon:{
        height: 30,
        width:30,
        alignSelf:'flex-end',
        left : windowWidth - 110
    },
    reelBottom:{
        paddingHorizontal:10,
        width : '100%',
        top: windowHeight - 400,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    reelsLike:{
        height: 25,
        width: 25,
        marginVertical:10
    }
});

export default styles;