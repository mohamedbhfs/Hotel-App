import React from 'react';
import { View,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from '../Styles/Navbarstyles';
import paramtresscreen from '../type/parametrescreen';
type props=NativeStackScreenProps<paramtresscreen,keyof paramtresscreen>
function Navbar ({navigation}:props){
    return (
        <View style={styles.navbar}>
            <Pressable onPress={()=>navigation.navigate('Home')} >
                <Icon name="home" size={20}  color="white"/>
            </Pressable>
            <Pressable >
                <Icon name="favorite" size={20} color="white" onPress={()=>navigation.navigate('Favorite')}/>
            </Pressable>
            <Pressable onPress={()=>navigation.navigate('personalinfo')}>
                <Icon name="person" size={20} color="white"/>
            </Pressable>
        </View>
    );

}
export default Navbar;
