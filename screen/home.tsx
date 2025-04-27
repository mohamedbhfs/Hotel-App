import React,{useState,useEffect, ReactElement}  from 'react';
import {  View ,Text , ScrollView} from 'react-native';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import Checkbuttonfilter from '../components/checkbuttonfilter';
import ButtonsFilterHome from '../components/buttonsfiltershome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootState } from '../redux/store';
import paramtresscreen from '../type/parametrescreen';
import styles from '../Styles/Homestyles';
import RequestApi from '../api/RequestApi';
import Searchbar from '../components/Searchbar';
type props=NativeStackScreenProps<paramtresscreen,'Home'>
function Home({navigation,route}:props) {
  const Navigation = {
    navigation:navigation,
    route:route};
    const personalinfo = useSelector((state:RootState)=> state.informationpersonellereducers.informationpersonelle);
    const [sear,setsear] = useState('');
    const [buttonfilterclicked,setbuttonfilterclicked] = useState<string>('All');
    const [resultat,setresultat] = useState<[{[key:string]:any}]|null>(null);
    const [search,setsearch] = useState('');
    var listehotel:ReactElement[] = [];
      useEffect(() => {
        const critere = search !== '' ? `["addr:city"~"^${search}",i]` : '(48.82,2.24,48.90,2.41)';
        RequestApi(critere,setresultat);
      }, [search,buttonfilterclicked]);
      if(resultat) {listehotel = Checkbuttonfilter({buttonfilterclicked,resultat,Navigation});}
    return (
          <View style={styles.main}>
            <View style={styles.maincontainer}>
                <Searchbar sear={sear} setsear={setsear} setsearch={setsearch}/>
                <ButtonsFilterHome buttonfilterclicked={buttonfilterclicked} setbuttonfilterclicked={setbuttonfilterclicked} />
                {personalinfo.name !== null ? <Text style={styles.welcome}>Bonjour , {personalinfo.name}</Text> : null}
                <ScrollView >
                  {(listehotel.length > 0 ||  resultat === null) ? listehotel : <Text style={{textAlign:'center'}}>Aucun hôtel trouvé</Text>}
                </ScrollView>
            </View>
            <Navbar navigation={navigation} route={route} />
          </View>
    );}
export default Home;
