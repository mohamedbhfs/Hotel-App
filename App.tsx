import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screen/home';
import PersonalInfo from './screen/PersonalInfo';
import { View } from 'react-native';
import Favorite from './screen/favorite';
import Onboarding from './screen/onboarding';


const srcimgpage1 = require('./assets/images/hotelpage1.png');
const titlepage1 = 'Select Your Dream Place';
const textpage1 = 'Explore your Dream spoot destination places where you want to go and you can feel amazing travel exprience';

import Hotelprincipal from './screen/hotelprincipal';
import { Provider } from 'react-redux';
import store from './redux/store';
import { StyleSheet } from 'react-native';

type paramtresscreen={
  Onboarding:{srcimg?:any,title?:string,text?:string,isfirst:boolean},
  Home: undefined,
  Hotelprincipal:{ name:String,rooms:number,stars:number, addr:string,key:number,},
  personalinfo:undefined,
  Favorite:undefined,
}
const Stack = createStackNavigator<paramtresscreen>();

const App = () => {
  console.log('mohamed');
 return (

  <Provider store={store}>
    <View style={styles.main}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={Onboarding}
            initialParams={{
                  srcimg: srcimgpage1,
                  title: titlepage1,
                  text:textpage1,
                  isfirst:true,
                }} />
          <Stack.Screen
            name="Home"
            component={Home}
            />
            <Stack.Screen
            name="Hotelprincipal"
            component={Hotelprincipal}
            />
            <Stack.Screen
            name="personalinfo"
            component={PersonalInfo}
            />
            <Stack.Screen
            name="Favorite"
            component={Favorite}
            />


        </Stack.Navigator>
    </NavigationContainer>
  </View>
</Provider>
  );
};


const styles = StyleSheet.create({
  main:{
    flex:1,
  },
});
export default App;


/*

*/
