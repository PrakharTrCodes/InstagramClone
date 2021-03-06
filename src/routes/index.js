import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Profile from './screens/profile';
import Notification from './screens/notification';
import Search from './screens/search';
import SignUp from './screens/signUp';
import Splash from './screens/splashScreen'
import InstaLogin from './screens/instaLogin';
import User from './screens/profile/user';
import Chat from './screens/chat';
import Reels from './screens/Reels';
import { useSelector } from 'react-redux';
import StoryScreen from './screens/home/StoryScreen';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

const FeedStackNav = createNativeStackNavigator();

export function Feed() {
  return (
    <FeedStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FeedStackNav.Screen name='Home' component={Home} />
      <FeedStackNav.Screen name="User" component={User} />
      <FeedStackNav.Screen name="Chat" component={Chat} />
      <FeedStackNav.Screen name='StoryScreen' component={StoryScreen} />
    </FeedStackNav.Navigator>
  )
}

export function ReelStack() {
  return (
    <FeedStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FeedStackNav.Screen name='Reels' component={Reels} />
      <FeedStackNav.Screen name="User" component={User} />
    </FeedStackNav.Navigator>
  )
}

export function SearchStack() {
  return (
    <FeedStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FeedStackNav.Screen name='Search' component={Search} />
      <FeedStackNav.Screen name="ReelStack" component={ReelStack} />
    </FeedStackNav.Navigator>
  )
}




export default function Navigation() {
  const {dp} = useSelector(state =>state.UsersListReducer);
  const { isSignedIn } = useSelector((store) => store.UsersListReducer);
  return (
    <NavigationContainer>{isSignedIn ? (
      <Tab.Navigator screenOptions={{
        tabBarStyle: { backgroundColor: 'black' },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#121212',
      }}>
        <Tab.Screen name="HomeStack" component={Feed} options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ tintColor, focused }) => (
            <Image
              source={focused ? require('../assets/Images/homeActve.png') : require('../assets/Images/home.png')}
              style={{ height: 26, width: 26 }}
            />
          )
        }} />
        <Tab.Screen name="SearchStack" component={SearchStack} options={{
          tabBarIcon: ({ tintColor, focused }) => {

            return (
              <Image
                source={focused ? require('../assets/Images/search.png') : require('../assets/Images/searchBef.png')}
                style={{ width: 26, height: 26, tintColor: tintColor }}
              />
            )
          }
        }} />
        <Tab.Screen name="ReelStack" component={ReelStack} options={{
          tabBarIcon: ({ tintColor, focused }) => (

            <Image
              source={focused ? require('../assets/Images/reelsAct.png') : require('../assets/Images/reels.png')}
              style={{ width: 26, height: 26, tintColor: tintColor }}
            />
          )
        }} />
        <Tab.Screen name="Notifications" component={Notification} options={{
          tabBarIcon: ({ tintColor, focused }) => (

            <Image
              source={focused ? require('../assets/Images/heartActive.png') : require('../assets/Images/heart.png')}
              style={{ width: 26, height: 26, tintColor: tintColor }}
            />
          )
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          headerTitle: 'prakhar@30',
          headerTitleAlign: 'left',
          headerTitleStyle: { color: 'white' },
          tabBarIcon: ({ tintColor, focused }) => (
            <View style={{ backgroundColor: 'white', overflow: "hidden", height: 26, width: 26, borderRadius: 40 }}>
              <Image
                source={{uri:dp}}
                style={{ height: '100%', width: '100%' }}
              />
            </View>
          )
        }} />
      </Tab.Navigator>
    ) : (
      <HomeStack.Navigator>
        <HomeStack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
        <HomeStack.Screen options={{ headerShown: false }} name="InstaLogin" component={InstaLogin} />
        <HomeStack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
      </HomeStack.Navigator>
    )}

    </NavigationContainer>
  )
}
