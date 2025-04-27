import React  from 'react';
import {  View ,StatusBar,Image,Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import paramtresscreen from '../type/parametrescreen';
import FavoriteIcon from '../components/FavoriteIcon';
import styles from '../Styles/Hotelprincipalstyles';
type routeparm={
    name:String,
    rooms:number,
    stars:number,
    addr:string,
    key:number,}
type props=NativeStackScreenProps<paramtresscreen,'Hotelprincipal'>
function Hotelprincipal({route,navigation}:props) {
    const {name,rooms,stars,addr,key}:routeparm = route.params;
    const srcimg = require('../assets/images/hotelprincipal.jpg');
    var star = [];
    for(var i = 0; i < stars; i++) {
         star.push(<Icon key={i} name="star" size={30} color="gold"/>);
    }
return (
 <View style={styles.main}>
    <StatusBar hidden translucent={true}/>
    <TouchableOpacity style={styles.backiconcontainer} onPress={()=>navigation.pop()}>
        <Icon name = "arrow-back" size={30} color="#ffffff"/>
    </TouchableOpacity>
    <FavoriteIcon keyhotel={key}/>
    <Image source={srcimg} style={styles.image}/>
    <View style={styles.containerrest}>
       <Text style={styles.name}>{name}</Text>
       <View style={styles.containeraddrroom}>
           <Icon name="location-on" size={25} color="#2196F3"/>
           <Text style={styles.addr}>{addr}</Text>
        </View>
        <View style={styles.containeraddrroom}>
            <Icon name="bed" size={25} color="#2196F3"/>
            <Text style={styles.title}>{rooms} Rooms</Text>
        </View>
        <View style={styles.containericon}>{star}</View>
        <View>
            <Text style={styles.title}>About</Text>
            <Text style={styles.text}>San Marino is a mountainous microstate surrounded by north-central Italy. Among the world's oldest republics, it retains much of its historic architecture.
                 On the slopes of Monte Titano sits the capital, also called San Marino, known for its Read more</Text>
        </View>
        <TouchableOpacity style={styles.boutton}>
        <Text style={styles.textboutton} >Call Now</Text>
        </TouchableOpacity>
    </View>
 </View>);}
export default Hotelprincipal;
