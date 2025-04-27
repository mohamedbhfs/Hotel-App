import { StyleSheet } from "react-native";
const styles = StyleSheet.create(
    {   main:{
            flex:1,
        },
        title :{
            fontFamily:'Poppins-SemiBold',
            textAlign:'center',
            fontSize:32,
            color:'#2196F3',
            marginBottom:40,
        },
        container:{
            flexDirection:'column',
            rowGap:30,
            justifyContent:'center',
            paddingHorizontal:10,
        },
        button:{
            padding:10,
            borderRadius:15 ,
            backgroundColor:'#2196F3',
        },
        textbutton :{
            textAlign:'center',
            fontFamily:'Poppins-Bold',
            color:'#ffffff' ,
         },
         sauvgardedefaulttext:{
            textAlign:'center',
            color:'#2196F3',
         }});
export default styles;
