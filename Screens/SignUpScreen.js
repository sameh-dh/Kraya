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
  Dimensions,
  SectionList,
  TextBase
} from "react-native";

const SignupScreen = ({navigation}) => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [select , setSelect ] = useState("parent")
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={
       
            require("../assets/user.png")} /> 
        <StatusBar style="auto" />
        {/* choise text starts here */}
        <View style={styles.choices}>
        <View style={select === "parent" ? styles.choiceActive : styles.choice}>
          <Text
            style={styles.TextInput}
            placeholder="Email."
            value="Parent"
            placeholderTextColor="#003f5c"
            onPress={() => setSelect("parent")}
          >Parent </Text>
          </View>
          <View style={select === "student" ? styles.choiceActive : styles.choice}>
          
          <Text
            style={styles.TextInput}
        
            placeholderTextColor="#003f5c"
            onPress={() => setSelect("student")}
            >Student </Text>
          </View>



          <View style={select === "instructor" ? styles.choiceActive : styles.choice}>
          
          <Text
          
            style={styles.TextInput}
           
            placeholderTextColor="#003f5c"
            onPress={() => setSelect("instructor")}
            >Instructor</Text>
          </View>

        </View> 
        <View style={styles.inputView}>
          
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          /> 
        </View> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          /> 
        </View> 
        
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={() => navigation.navigate("signup")}>SignUp</Text> 
        </TouchableOpacity> 
        <TouchableOpacity>
          <Text style={styles.forgot_button} onPress={() => navigation.navigate("Login")}> Log In </Text> 
        </TouchableOpacity> 
      </View> 
    
  );
  }
  const width = Dimensions.get('window').width
  const height = Dimensions.get('window').height
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#EFF0F4",
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
      marginTop: 20, 
      marginBottom: 5,
      backgroundColor: "#213263",
    },
    loginText: {
        color:"white"
    },
    choices : {
      display: "flex",
      flexDirection: "row",
      gap: 5, 
    },
    choice : {
      backgroundColor: "#ffff",
      elevation: 20,
      shadowColor: '#213263',
      width: "24%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
      textAlign:"center",

     
    },
    choiceActive : {
      backgroundColor: "#F6F6F6",
      elevation: 10,
      shadowColor: '#213263',
      width: "24%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
      textAlign:"center",
    }
    
  });


  export default SignupScreen