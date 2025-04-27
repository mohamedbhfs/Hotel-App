import { StyleSheet } from 'react-native';
const safePadding = '5%';
const styles = StyleSheet.create(
    {
           contentContainer :{
            alignSelf:'center',
            flex:1,
           },
           imageonboarding:{
            width:200,
            height:200,
            marginBottom:50,
            marginHorizontal:'auto',
           },
           textbutton :{
            fontFamily: 'Poppins-Bold',
            textAlign:'center',
           },
           titleonboarding:{
            fontSize:24,
            marginBottom:10,
           },
           textonboarding:{
            fontSize:16,
            opacity:0.5,
            lineHeight:30,
           },
           mainContainer:{
            flex:1,
            paddingHorizontal:20,
            paddingTop:safePadding,
         },
         mainContaineronboarding:{
            paddingVertical:60,
         },
         button:{
            paddingVertical:10 ,
            paddingHorizontal:40,
           },
         textbuttonnext:{
            color:'#fbfcfc',
        },
         textbuttonback:{
            color:'#000000',
            opacity:0.5 ,
        },
          containerbutton:{
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
           },
           buttonnext:{
            backgroundColor:'#2196F3',
           },
           buttongo:{
            width:'100%',
            paddingVertical:10 ,
            paddingHorizontal:40,
           },
           textbuttongo:{
            color:'#ffffff',
           },


    }
);
export default styles;
