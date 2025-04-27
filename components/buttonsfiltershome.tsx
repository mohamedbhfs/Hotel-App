import React from 'react';
import Buttonfilter from './buttonfilter';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
type typebutton ={
    buttonfilterclicked:string,
    setbuttonfilterclicked:React.Dispatch<React.SetStateAction<string>>
}
function ButtonsFilterHome({buttonfilterclicked,setbuttonfilterclicked}:typebutton) {
    return (
        <View style={styles.containerallbutton}>
                  <Buttonfilter  onpress={()=>{
                    if(buttonfilterclicked !== 'All') {
                      setbuttonfilterclicked('All');
                    }
                  }}
                  buttonfilterclick = {buttonfilterclicked}
                    text="All"  />
                     <Buttonfilter  onpress={()=>{
                    if(buttonfilterclicked !== 'Stars') {
                      setbuttonfilterclicked('Stars');
                    }
                  }}
                  buttonfilterclick = {buttonfilterclicked}
                    text="Stars"  />
                     <Buttonfilter  onpress={()=>{
                    if(buttonfilterclicked !== 'Rooms') {
                      setbuttonfilterclicked('Rooms');
                    }
                  }}
                    buttonfilterclick = {buttonfilterclicked}
                    text="Rooms"  />
        </View>
    );
}

const styles = StyleSheet.create({
        containerallbutton:{
            flexDirection:'row',
            justifyContent:'center',
            marginTop:10,
            marginBottom:30,
        },
});
export default ButtonsFilterHome;
