
import { StyleSheet } from 'react-native';
const safePadding = '5%';
const styles = StyleSheet.create({
    main:{
        flex:1,
        paddingTop:safePadding,
    },
    containerallbutton:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
        marginBottom:30,
    },
    textinput:{
        fontFamily :'Poppins-SemiBold',
    },
    Pressable:{
      marginBottom:30,
    },
    navbar :{
      position:'absolute',
      top:'70%',
      width:'100%',
      backgroundColor:'red',
      zIndex:2,
      flexDirection:'row',
      padding:20,
      justifyContent:'space-between',
      alignContent:'center',
    },
    maincontainer:{
      paddingHorizontal:20,
    },
    welcome:{
      textAlign:'center',
      fontFamily:'Poppins-SemiBold',
      marginBottom:20,
    },
});
export default styles;
