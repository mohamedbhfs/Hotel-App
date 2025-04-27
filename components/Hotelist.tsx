import React ,{ ReactElement } from 'react';
import {  View ,Text,StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
type prop= {
    name:String,
    nbetoile:number,
    city:String,
}
function Hotelist({name,nbetoile,city}:prop) {
    const srcimg = require('../assets/images/hotelprincipal.jpg');
    var stars:ReactElement[] = [];
    for (var i = 0; i < nbetoile; i++) {
     stars.push(<Icon key={i} name="star" size={20} color="gold"/>);
    }
    return (
        <View>
          <Image source={srcimg} style={styles.image} />
          <View style={styles.containericonname}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.containericon}>{stars}</View>
          <Text style={styles.name}>{city}</Text>
          </View>
        </View>
    );
}
const styles = StyleSheet.create(
    {
        image: {
            width: '100%',
            height: 150,
            borderRadius:10,
        },
        name :{
            fontFamily:'Poppins-SemiBold',
            color:'#ffffff',
        },
        containericon :{
        flexDirection:'row',
        },
        containericonname :{
            position:'absolute',
            left:'5%',
            top:'50%',
        },
    }
);
export default Hotelist;
