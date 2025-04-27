import React from 'react';
import { Text,TouchableOpacity,StyleSheet, StyleProp, TextStyle, ViewStyle} from 'react-native';
type params={
   styleperso?:{
      button?:StyleProp<ViewStyle>,
      textbutton?:StyleProp<TextStyle>,
   },
   onpress:()=>void,
   text:string,
}
function Button ({styleperso = {},onpress,text}:params) {
return(
    <TouchableOpacity
     style={[styles.button,styleperso.button]}
     onPress={onpress}
    >
    <Text  style={[styles.textbutton,styleperso.textbutton]} >{text}</Text>
    </TouchableOpacity>
);}
const styles = StyleSheet.create({

 button :{
    borderRadius:15 ,
 },

 textbutton :{
    textAlign:'center',
    fontFamily:'Poppins-Bold',

 },
});
export default Button;

