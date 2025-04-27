import React  from 'react';
import {  View ,Text } from 'react-native';
import Cardinfo from '../components/cardinfo';
import Button from '../components/button';
import { useSelector,useDispatch } from 'react-redux';
import { login } from '../redux/informationpersonelleslice';
import Navbar from '../components/Navbar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootState } from '../redux/store';
import { useForm } from 'react-hook-form';
import styles from '../Styles/PersonalInfostyles';
import paramtresscreen from '../type/parametrescreen';
import {z} from 'zod';
import {zodResolver } from '@hookform/resolvers/zod';
type props=NativeStackScreenProps<paramtresscreen,'personalinfo'>
type persinfprops={
    Name:string |null,
    Age:string |null,
    Email:string |null,
    Password:string | null,}
const schema = z.object({
    Name:z.string().min(1,'Nom Doit Etre Rempli'),
    Email:z.string().email('Format Email Non respecte').min(1,'Email Doit Etre Remplie'),
    Age:z.string().min(1,'Age Doit Etre Rempli'),
    Password:z.string().min(1,'Password Doit Etre Remplie'),
});
function PersonalInfo({navigation,route}:props){
    const personalinfo = useSelector((state:RootState)=> state.informationpersonellereducers.informationpersonelle);
    const dispatch = useDispatch();
    const {control,handleSubmit,formState:{errors,isSubmitSuccessful}} = useForm({
        defaultValues:{
            Name:personalinfo.name,
            Age:personalinfo.email,
            Email:personalinfo.age,
            Password:personalinfo.password,
        },
        resolver:zodResolver(schema),
    });
    const onsubmit = (data:persinfprops)=> {
        dispatch(login(data));};
    return(
        <View style={styles.main}>
            <Text style={styles.title}>
                Profile
            </Text>
            <View style={styles.container}>
                    <Cardinfo Nomchamp="Name" control={control} errors={errors} />
                    <Cardinfo Nomchamp="Age" control={control} errors={errors} />
                    <Cardinfo Nomchamp="Email" control={control} errors={errors}  />
                    <Cardinfo Nomchamp="Password" control={control} errors={errors} />
                    <Button
                    text="Save"
                    styleperso={
                        {textbutton:styles.textbutton,
                        button:styles.button,}}
                    onpress={handleSubmit(onsubmit)}
                    />
            </View>
            {isSubmitSuccessful && (<Text style={styles.sauvgardedefaulttext}>Informations sauvgardes</Text>)}
            <Navbar route={route} navigation={navigation}/>
        </View>);}
export default PersonalInfo;
