import { StyleSheet } from 'react-native';
const styles = StyleSheet.create(
    {
        main:{
            flex:1,
            position:'relative',
        },
        image: {
            width: '100%',
            height: 400,
            borderRadius:20,
            zIndex:0,
        },
        name:{
            fontSize:24,
            fontFamily:'Poppins-Bold',
        },
        addr :{
            fontFamily:'Poppins-SemiBold',
            fontSize:18,
            opacity:0.5,
        },
        containeraddrroom :{
           flexDirection:'row',
           justifyContent:'flex-start',
           alignItems:'center',
           columnGap:'5',
        },
        containerrest:{
            position:'relative',
            bottom:40,
            backgroundColor:'#ffffff',
            borderRadius:25,
            padding:15,
            rowGap:20,
        },
        containericon :{
            flexDirection:'row',
            },
        title :{
            fontSize:19,
            fontFamily:'Poppins-Bold',
        },
        text :{
            fontFamily:'Poppins-SemiBold',
            fontSize:14,
            opacity:0.5,
        },
        boutton:{
            width:'100%',
            backgroundColor:'#2196F3',
            borderRadius:15 ,
            justifyContent:'center',
            flexDirection:'row',
            padding:10,
        },
        textboutton:{
            textAlign:'center',
            fontFamily:'Poppins-Bold',
            color:'#ffffff' ,
        },
        backiconcontainer : {
            position:'absolute',
            top:'5%',
            left:'4%',
            backgroundColor:'#000000',
            borderRadius:10,
            zIndex:1,
        },
});
export default styles;
