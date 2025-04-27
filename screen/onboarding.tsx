import React from 'react';
import { Text, View ,Image} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from '../Styles/Onboardingstyles';
import paramtresscreen from '../type/parametrescreen';
import Button from '../components/button';
type props=NativeStackScreenProps<paramtresscreen,'Onboarding'>
function Onboarding ({route,navigation}:props) {
    const {srcimg,title,text,isfirst} = route.params;
    return(
        <View
                style={[styles.mainContainer,styles.mainContaineronboarding]}>
                <View style={styles.contentContainer}>
                    <Image source={srcimg} style={styles.imageonboarding} />
                    <Text style={[styles.titleonboarding,styles.textbutton]} >{title}</Text>
                    <Text style={[styles.textonboarding,styles.textbutton]}>{text}</Text>
                </View>
                    { isfirst === true ?
                            <View style={styles.containerbutton}>
                                <Button onpress={()=> navigation.replace('Onboarding',{isfirst:false})} text="Let's Go" styleperso={{button:[styles.buttonnext,styles.buttongo],textbutton:styles.textbuttongo}} />
                            </View>
                      :
                            <View style={styles.containerbutton}>
                                <Button onpress={()=> navigation.replace('Onboarding',{isfirst:true})} text="Back" styleperso={{button:styles.button,textbutton:styles.textbuttonback}}/>
                                <Button onpress={()=>navigation.replace('Home')}  styleperso={{textbutton:styles.textbuttonnext,button:[styles.buttonnext,styles.button]}} text="Next"/>
                            </View>
                    }
        </View>
   );
}
export default Onboarding;
