import React, { ReactElement, useEffect ,useState} from 'react';
import {View , ScrollView, Text,Pressable} from 'react-native';
import { useSelector } from 'react-redux';
import Hotelist from '../components/Hotelist';
import Navbar from '../components/Navbar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootState } from '../redux/store';
import paramtresscreen from '../type/parametrescreen';
import RequestApi from '../api/RequestApi';
import styles from '../Styles/Favoritestyles';
type props=NativeStackScreenProps<paramtresscreen,'Favorite'>
function Favorite({navigation,route}:props){
    var listehotel:ReactElement[] = [];
    const favoritehotel = useSelector((state:RootState)=>state.favoritereducers.favoritelist);
    const [resultat,setresultat] = useState<[{[key:string]:any}]|null>(null);
    useEffect(()=>{
        if(favoritehotel.length > 0){
        const critere = `(id:${favoritehotel.join(',')})`;
        RequestApi(critere,setresultat);
        }
    },[favoritehotel,navigation]);
    if(resultat) {
        resultat.map((res)=>{
            listehotel.push(<Pressable
              style={styles.Pressable}
             key={res.id}
             onPress={()=> navigation.push('Hotelprincipal',{key:res.id,name:res.tags.name,rooms:res.tags.rooms, stars:parseInt(res.tags.stars,10),addr:res.tags['addr:street']})}>
              <Hotelist name={res.tags.name} nbetoile={parseInt(res.tags.stars,10)} city={res.tags['addr:city']} />
              </Pressable>);});
    }
    return(
    <View style={styles.main}>
        <View style={styles.maincontainer}>
        <ScrollView>
             {favoritehotel.length > 0 ? listehotel : <Text>Aucun hôtel trouvé</Text>}
         </ScrollView>
        </View>
         <Navbar route={route} navigation={navigation}/>
    </View>
    );
}
export default Favorite;
