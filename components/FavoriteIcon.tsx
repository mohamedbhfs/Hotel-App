import React ,{useState} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch,useSelector } from 'react-redux';
import { addfavorite } from '../redux/favoriteslice';
import { removefavorite } from '../redux/favoriteslice';
import { RootState } from '../redux/store';
export default function FavoriteIcon({keyhotel}:{keyhotel:number}) {
    const favoritehotel:number[] = useSelector((state:RootState)=>state.favoritereducers.favoritelist);
    const dispacth = useDispatch();
    const [coloriconfavorite,setcoloriconfavorite] = useState(
        favoritehotel.includes(keyhotel) ? '#ff80be' : '#ffffff'
    );
  return (
    <TouchableOpacity style={styles.favoriteiconcontainer} onPress={
            ()=>{
                if(coloriconfavorite === '#ffffff'){
                    dispacth(addfavorite(keyhotel));
                    console.log(favoritehotel);
                    setcoloriconfavorite('#ff80be');
                }
                else {
                    dispacth(removefavorite());
                    console.log(favoritehotel);
                    setcoloriconfavorite('#ffffff');
                }
            }}>
            <Icon name = "favorite" size={30}
                color={coloriconfavorite}/>
        </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    favoriteiconcontainer : {
        position:'absolute',
        top:'5%',
        right:'4%',
        zIndex:1,
    },
});

