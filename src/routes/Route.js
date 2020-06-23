/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Image,
  View,
  Text,
  Button
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Splash from "../screen/Splash/Splash";
import SignUp from "../screen/SignUp/SignUp";
import Forgot from "../screen/Forgot/Forgot";
import Intro from "../screen/Intro/Intro";
import Payment from "../screen/Payment/Payment";
import Canteen from "../screen/Canteen/Canteen";
import Stats from "../screen/Stats/Stats";
import Profile from "../screen/Profile/Profile";
import changeProfile from "../screen/Profile/changeProfile/Change";
import Help from "../screen/Help/Help";
import CallUs from "../screen/CallUs/CallUs";
import aboutAccount from "../screen/aboutAccount/Account";
import aboutKantin from "../screen/aboutKantin/Kantin";
import aboutPayment from "../screen/aboutPayment/Pay";
import caraBayar from "../screen/aboutPayment/caraBayar/Bayar";
import caraNabung from "../screen/aboutPayment/caraNabung/Nabung";
import Onboard from "../screen/OnBoard/OnBoard";
import SignIn from '../screen/SignIn/SignIn';
import InfoApp from '../screen/InfoApp/InfoApp';
import Riwayat from '../screen/Riwayat/Riwayat';
import Tabungan from '../screen/Tabungan/Tabungan';
import styles from '../screen/InfoApp/styles';

const Stack = createStackNavigator();
const MaterialBottom= createMaterialBottomTabNavigator();

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("Splash")} title="Go to Splash "/>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

class Route extends React.Component {

  
  createTabs=()=>{
    return (
    <MaterialBottom.Navigator 
    activeColor="#11E69F"
    inactiveColor="#C0C6CF"
    options={{headerShown:false}}
    barStyle={{ backgroundColor: 'white' }}
    >
      <MaterialBottom.Screen 
        name="Stats" 
        component={Stats} 
        options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused }) => (focused ?
          <Image source={require('../../assets/icon/tab/activeHome.png')} style={{width:24,height:24}}/>
          :
          <Image source={require('../../assets/icon/tab/inActiveHome.png')} style={{width:24,height:24}}/>
        ),
      }}/>
      <MaterialBottom.Screen 
        name="Canteen" 
        component={Canteen} 
        options={{
        tabBarLabel: 'Kantin',
        tabBarIcon: ({ focused }) => (focused ?
          <Image source={require('../../assets/icon/tab/activeCanteen.png')} style={{width:24,height:24}}/>
          :
          <Image source={require('../../assets/icon/tab/inActiveCanteen.png')} style={{width:24,height:24}}/>
        ),
      }}/>
      <MaterialBottom.Screen 
        name="Payment" 
        component={Payment} 
        options={{
        tabBarLabel: 'Kelas Pay',
        tabBarIcon: ({ focused }) => (focused ?
          <Image source={require('../../assets/icon/tab/activeClass.png')} style={{width:24,height:24}}/>
          :
          <Image source={require('../../assets/icon/tab/inActiveClass.png')} style={{width:24,height:24}}/>
        ),
      }}/>
      <MaterialBottom.Screen 
        name="Profile" 
        component={Profile} 
        options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused }) => (focused ?
          <Image source={require('../../assets/icon/tab/activeProfile.png')} style={{width:24,height:24}}/>
          :
          <Image source={require('../../assets/icon/tab/inActiveProfile.png')} style={{width:24,height:24}}/>
        ),
      }}/>
    </MaterialBottom.Navigator>
    )
  }
  render(){
  const noHeader = {headerShown: false}
  const style = {
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'white',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    headerTintColor: '#203354',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 20,
      padding:0,
    }
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bottom Tabs" >
        <Stack.Screen name="Splash" component={Splash} options={noHeader}/>
        <Stack.Screen name="Onboard" component={Onboard} options={noHeader}/>
        <Stack.Screen name="Intro" component={Intro} options={noHeader}/>
        <Stack.Screen name="SignIn" component={SignIn} options={noHeader}/>
        <Stack.Screen name="SignUp" component={SignUp} options={noHeader}/>
        <Stack.Screen name="Ubah Akun" component={changeProfile} options={style}/>
        <Stack.Screen name="Temukan Akun Anda" component={Forgot} options={style}/>
        <Stack.Screen name="Bantuan" component={Help} options={style}/>
          <Stack.Screen name="Tentang Akun Saya" component={aboutAccount} options={style}/>
          <Stack.Screen name="Kantin" component={aboutKantin} options={style}/>
          <Stack.Screen name="Hubungi Kami" component={CallUs} options={style}/>
          <Stack.Screen name="Kelas Pay" component={aboutPayment} options={style}/>
            <Stack.Screen name="Cara Membayar" component={caraBayar} options={style}/>
            <Stack.Screen name="Cara Menabung" component={caraNabung} options={style}/>
        <Stack.Screen name="Info Aplikasi" component={InfoApp} options={style}/>
        <Stack.Screen name="Riwayat" component={Riwayat} options={style}/>
        <Stack.Screen name="Tabungan" component={Tabungan} options={style}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name="Bottom Tabs" children={this.createTabs} options={noHeader}/>
      </Stack.Navigator>
    </NavigationContainer>
  )};
}

export default Route;