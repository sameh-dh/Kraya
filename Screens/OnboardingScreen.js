import React from "react";
import {View , Text , Button ,Image,  StyleSheet} from 'react-native';
import Onboarding from  'react-native-onboarding-swiper' ;

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding 
     
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.replace("Login")}
        titleStyles={{ color: "#213263" ,fontSize:30 ,fontFamily: 'sans-serif',fontWeight:700}}
        subTitleStyles = {{color:"#213263", lineHeight:22, fontWeight:700 ,width:300
               ,marginTop: 150}}
        styles ={{color:"#ffe10b"}}
        imageContainerStyles={{
            width:100,  
        }}
        pages={[
            
            { 
                backgroundColor : '#f9f4e9',
                image : <Image 
                style={{ height: 100, width: 100 }}
                source={require('../assets/logo3.jpg')} />,
                title : 'Welcome to krayti',
                subtitle: 'swipe to start ',
                subTitleStyles:{color:"#213263"}
            },
            { 
                backgroundColor : '#f9f4e9',
                image : <Image 
                style={{ height: 350, width: 350 ,marginTop:100 }}
                source={require('../assets/ILL1.png')} />,
                
                subtitle: 'Welcome to KRAYTI, the educational  mobile app designed with utmost care for students aged 12 to 18.'
            },
            { 
                backgroundColor : '#f9f4e9',
                image : <Image 
                style={{  height: 350, width: 350 ,marginTop:100 }}
                source={require('../assets/ILL2.png')} />,
               
                subtitle: ' Our mission is to empower you to excel and reap the benefits of your educational journey. With KRAYTI, success is just a tap away.'
            }
        ]}
        />

    );
};

export default OnboardingScreen ; 

const styles = StyleSheet.create({
    container : {
        flex: 1 ,
        alignItems: 'center',
        justifyContent: 'center'
    }
})