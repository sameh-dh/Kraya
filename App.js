import React, {useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack"
import AsyncStorage from "@react-native-community/async-storage";
import OnboardingScreen from "./Screens/OnboardingScreen"
import LoginScreen from "./Screens/LoginScreen"

const AppStack = createStackNavigator();
export default function App() {
  const [isFirstLaunch , setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLauched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched',true);
        setIsFirstLaunch(true)
      } else {
        setIsFirstLaunch(false)
      }
    })
  },[])
// check if the introduction page already seen by the user
  if(isFirstLaunch === null) {
    return null ; 
   
  }else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
    <AppStack.Navigator 
    headerMode="none" >
    <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
    <AppStack.Screen name="Login" component={LoginScreen} />
    </AppStack.Navigator>
   </NavigationContainer>
    )
  }else {
   return  <LoginScreen />
  }
  
}

