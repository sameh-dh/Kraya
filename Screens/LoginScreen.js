import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={
       
            require("../assets/user.png")} /> 
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          /> 
        </View> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          /> 
        </View> 
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text> 
        </TouchableOpacity> 
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => navigation.navigate("Home")}>LOGIN</Text> 
        </TouchableOpacity> 
        <TouchableOpacity>
          <Text style={styles.forgot_button} onPress={() => navigation.navigate("signup")}> SignUp </Text> 
        </TouchableOpacity> 
      </View> 
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f9f4e9",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      marginBottom: 40,
      width: 100,
      height:100
    },
    inputView: {
      backgroundColor: "#ffff",
      elevation: 20,
      shadowColor: '#213263',
      borderRadius: 5,
      width: "60%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
      textAlign:"center",
      borderColor:'#213263',
      borderCurve :6
     
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
    
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginBtn: {
      width: "40%",
      borderRadius: 5,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 0, 
      marginBottom: 5, 
      backgroundColor: "#213263",
    },
    loginText: {
        color:"white"
    }
  });

  export default LoginScreen 