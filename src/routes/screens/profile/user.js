import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView,  } from 'react-native'
import styles from '../../../assets/Styles'

const User = ({navigation, route}) => {
    console.log("User", route.params.item)
    const {item} = route.params;
    return (
        <View 
        style={styles.mainPro}>
        <View style = {{height:70, backgroundColor:'#1a1a1a', flexDirection:'row'}}>
            <Text style = {{color:'white', marginTop:40, margin:14}}>{"emilia@30"}</Text>
            <TouchableOpacity onPress={()=>{setModalVis(!modalVis)}} style={{left:250}}>
                <Image style ={{height:20, width:20, marginTop:40}} source={require('../../../assets/Images/menu.png')} />
            </TouchableOpacity>
        </View>
        <ScrollView
        stickyHeaderIndices={[1]}
   >
       <View style ={styles.proHead}>
           <View style = {{flexDirection:'row', alignItems:"center", justifyContent:'space-between',paddingHorizontal: 6 }}>
           <Image style = {styles.dp}  source ={{uri: item.url2}}/>
           <View style={{}}>
               <Text style = {{textAlign:'center', color :'white',fontWeight:'500' }}>35</Text>
               <Text style = {{textAlign:'center', color :'white',fontWeight:'500' }}>Posts</Text>
           </View>
           <View style={{}}>
               <Text style = {{textAlign:'center', color :'white',fontWeight:'500' }}>325</Text>
               <Text style = {{textAlign:'center', color :'white',fontWeight:'500' }}>Followers</Text>
           </View>
           <View style={{marginRight:14}}>
               <Text style = {{textAlign:'center', color :'white',fontWeight:'500' }}>325</Text>
               <Text style = {{textAlign:'center', color :'white',fontWeight:'500' }}>Following</Text>
           </View>
           </View>
           <Text style ={{color:'white', marginLeft:8}}>
               {item.name}
           </Text>
           <Text style ={{color:'white', marginLeft:8}}>
               {item.occ}
           </Text>
           <Text style ={{color:'white', marginLeft:8}}>
               {"Carpadiem"}
           </Text>
           <View style = {styles.threeBtn}>
           <TouchableOpacity onPress={() => { }} style={{ ...styles.followBt, marginTop: 14 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                    {'Edit Profile'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style = {{height:26,width:26, alignSelf:'center', margin:8}} source={require('../../../assets/Images/add-user.png')}/>
            </TouchableOpacity>
           </View>
       </View>
       <View style = {styles.sticky}>
           <Image style ={{height:30, width: 30, margin:4}} source ={require('../../../assets/Images/grid.png')} />
       </View>
      
   </ScrollView>
   </View>
   
    )
}

export default User

