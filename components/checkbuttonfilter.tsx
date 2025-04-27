import React, { ReactElement } from 'react';
import { Pressable } from 'react-native';
import Hotelist from './Hotelist';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import paramtresscreen from '../type/parametrescreen';
type propsnavigation=NativeStackScreenProps<paramtresscreen,'Home'>;
type props={
  buttonfilterclicked:string,
  resultat:[{
    [key:string]:any,
  }],
  Navigation:propsnavigation,
}
function Checkbuttonfilter({buttonfilterclicked,resultat,Navigation}:props){
    const listehotel:ReactElement[] = [];
    if(buttonfilterclicked === 'Rooms'){
        (resultat).filter((res)=>
          res.tags.stars && res.tags.rooms && res.tags['addr:city']
        ).sort((a,b)=>
          parseInt(b.tags.rooms,10) - parseInt(a.tags.rooms,10)
        ).map((res)=>{
            listehotel.push(<Pressable
             key={res.id}
             onPress={()=> Navigation.navigation.push('Hotelprincipal',{key:res.id,name:res.tags.name,rooms:res.tags.rooms, stars:parseInt(res.tags.stars,10),addr:res.tags['addr:street']})}>
              <Hotelist name={res.tags.name} nbetoile={parseInt(res.tags.stars,10)} city={res.tags['addr:city']} />
              </Pressable>);
        }
      );
      }
      else if(buttonfilterclicked === 'Stars'){
        (resultat).filter((res)=>
          res.tags.stars && res.tags.rooms && res.tags['addr:city']
        ).sort((a,b)=>
          parseInt(b.tags.stars,10) - parseInt(a.tags.stars,10)
        ).map((res)=>{
            listehotel.push(<Pressable
             key={res.id}
             onPress={()=> Navigation.navigation.push('Hotelprincipal',{key:res.id,name:res.tags.name,rooms:res.tags.rooms, stars:parseInt(res.tags.stars,10),addr:res.tags['addr:street']})}>
              <Hotelist name={res.tags.name} nbetoile={parseInt(res.tags.stars,10)} city={res.tags['addr:city']} />
              </Pressable>);
        }
      );
      }
      else {
        (resultat).filter((res)=>
          res.tags.stars && res.tags.rooms && res.tags['addr:city']
        ).map((res)=>{
            listehotel.push(<Pressable
             key={res.id}
             onPress={()=> Navigation.navigation.push('Hotelprincipal',{key:res.id,name:res.tags.name,rooms:res.tags.rooms, stars:parseInt(res.tags.stars,10),addr:res.tags['addr:street']})}>
              <Hotelist name={res.tags.name} nbetoile={parseInt(res.tags.stars,10)} city={res.tags['addr:city']} />
              </Pressable>);
        }
      );
      }
      return listehotel;
}
export default Checkbuttonfilter;

