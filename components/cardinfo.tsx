import React  from 'react';
import {  View ,StyleSheet,Text,TextInput} from 'react-native';
import { Control, Controller} from 'react-hook-form';
type parms ={
    Nomchamp:string,
    control:Control<any>,
    errors: any,
}

function Cardinfo({Nomchamp,control,errors}:parms){
    return(
       <View>
                            <Text style={styles.titlecard}>
                                Your {Nomchamp}
                            </Text>
                            <Controller
                            control={control}
                            name={Nomchamp}
                            render={({field:{onChange,value}})=>(
                            <TextInput
                            placeholder={`Enter Your ${Nomchamp}`}
                            style={styles.TextInputcard}
                            value={value}
                            onChangeText={onChange}
                        />
                            )
                            }
                            />
                            {errors[Nomchamp] && (
                             <Text style={styles.msgerror}>{errors[Nomchamp].message}</Text>
                                )
                            }
       </View>
    );
}
const styles = StyleSheet.create({
    titlecard:{
        fontFamily:'Poppins-Bold',
        opacity:0.5,
        fontSize:16,
    },
    TextInputcard:{
        fontFamily:'Poppins-Regular',
        fontSize:16,
        marginHorizontal:10,
        paddingVertical:10,
        borderBottomColor:'black',
        borderBottomWidth:2,
    },
    msgerror:{
        color:'red',
        fontFamily:'Poppins-Regular',
        textAlign:'center',
        marginTop:10,
     },
}
);
export default Cardinfo;
