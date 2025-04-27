import React from 'react';
import { View,TextInput,TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
type params={
    setsearch:React.Dispatch<React.SetStateAction<string>>,
    sear:string,
    setsear:React.Dispatch<React.SetStateAction<string>>
}
export default function Searchbar({setsearch,sear,setsear}:params) {
  return (
    <View style={styles.searchbar}>
    <TextInput
        placeholder="Search Destination"
        value={sear}
        onChangeText={setsear}
      />
      <TouchableOpacity onPress={()=> setsearch(sear)}>
        <Icon name="search" size={20} />
      </TouchableOpacity>
  </View>
  );
}
const styles = StyleSheet.create({
    searchbar :{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:5,
        paddingHorizontal:10,
        marginTop:10,
        borderRadius:25,
        backgroundColor:'#e1e1e1',
    },
});


