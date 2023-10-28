import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack"

import OnboardingScreen from "./Screens/OnboardingScreen"
import LoginScreen from "./Screens/LoginScreen"

const AppStack = createStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <AppStack.Navigator 
    headerMode="none" >
    <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
    <AppStack.Screen name="Login" component={LoginScreen} />
    </AppStack.Navigator>
   </NavigationContainer>
  );
}

