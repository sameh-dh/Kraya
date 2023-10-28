import React from "react";
import {View , Text , Button ,Image,  StyleSheet} from 'react-native';
import Onboarding from  'react-native-onboarding-swiper' ;

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding 
     
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.replace("Login")}
        titleStyles={{ color: "#213263" ,fontSize:30 ,fontFamily: 'sans-serif',fontWeight:700}}
        subTitleStyles = {{color:"#213263", lineHeight:22, fontWeight:700}}
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
                subtitle: 'swipe to start',
                subTitleStyles:{color:"#213263"}
            },
            { 
                backgroundColor : '#f9f4e9',
                image : <Image 
                style={{ height: 150, width: 150 }}
                source={require('../assets/reading-book.png')} />,
                
                subtitle: 'Welcome to KRAYTI, the educational mobile app designed with utmost care for students aged 12 to 18.'
            },
            { 
                backgroundColor : '#f9f4e9',
                image : <Image 
                style={{ height: 250, width: 250 }}
                source={require('../assets/virtual-class.png')} />,
               
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