
import React  from 'react';
import Button from './button';
import { StyleSheet } from 'react-native';
type props ={
  buttonfilterclick:string,
  text:string,
  onpress:()=>void,
}
function Buttonfilter({buttonfilterclick,text,onpress}:props){
    return (
        <Button  onpress={onpress}
                  styleperso={buttonfilterclick === text ? {
                    textbutton :styles.textbuttonfilterclicked,
                    button:styles.buttonfilterclicked,
                  } :
                  {
                    textbutton:styles.textbuttonfilternotclicked,
                    button :styles.buttonfilternotclicked,
                  }
                  }
                    text={text}/>
    );

                }
const styles = StyleSheet.create({
    textbuttonfilterclicked:{
        color:'#ffffff' ,
         opacity:1 ,
      },
      buttonfilterclicked:{
        backgroundColor:'#2196F3',
        padding:10,
        marginRight:5,
      },
      textbuttonfilternotclicked:{
        color:'#000000' ,
        opacity:0.6 ,
        padding:10,
      },
      buttonfilternotclicked:{
        backgroundColor:'#e1e1e1',
        marginRight:5,
      },
});
export default Buttonfilter;
