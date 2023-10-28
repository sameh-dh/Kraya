import React from "react";
import {View , Text , Button ,Image,  StyleSheet} from 'react-native';
import Onboarding from  'react-native-onboarding-swiper' ;

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding 
        onSkip={() => navigation.navigate("Login")}
        onDone={() => navigation.navigate("Login")}
        titleStyles={{ color: "#213263" ,fontSize:30 ,fontFamily:"Poppins",fontWeight:700}}
        subTitleStyles = {{color:"#213263", }}
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
                color : "blue",
                subtitle: 'swipe to start'
            },
            { 
                backgroundColor : '#fdeb93',
                image : <Image source={require('../assets/onboarding-img2.png')} />,
                title : 'Onboarding',
                subtitle: 'hola'
            },
            { 
                backgroundColor : '#e9bcbe',
                image : <Image source={require('../assets/onboarding-img3.png')} />,
                title : 'Onboarding',
                subtitle: 'hola'
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