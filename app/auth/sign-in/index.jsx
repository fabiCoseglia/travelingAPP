import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import { auth } from "../../../configs/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";


export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSignIn = () => {
    if(!email && !password){
      ToastAndroid.show('Email and Password are required',ToastAndroid.BOTTOM)
    };

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log('SUCCESS LOGIN!!!');
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        if(errorMessage == 'Firebase: Error (auth/invalid-email).'){
          ToastAndroid.show('Invalid credentials',ToastAndroid.BOTTOM)
        }
      });
      
  };

  return (
    <ScrollView
      style={{
        padding: 25,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          marginTop: 45,
        }}
      >
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 28,
          color: "slategray",
          marginTop: 0,
        }}
      >
        Welcome Back
      </Text>

        <Image source={require('../../../assets/images/sign.png')}
        style={{
            width:'100%',
            height:400,
            marginTop:-40
        }} />

      <View style={{
        marginTop:-80
      }}>
        <Text style={{
            fontFamily:'outfit',
            marginBottom:5
        }}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email"
        onChangeText={(value)=>setEmail(value)}
        />
      </View>

      <View style={{
        marginTop:15
      }}>
        <Text style={{
            fontFamily:'outfit',
            marginBottom:5
        }}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Enter Password"
        onChangeText={(value)=>setPassword(value)}
        />
      </View>

        <TouchableOpacity style={{
            padding:15,
            backgroundColor: Colors.PRIMARY,
            borderRadius:15,
            marginTop:15
        }}
        onPress={onSignIn}
        >
            <Text style={{
                color:Colors.WHITE,
                textAlign:'center'
            }} >Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>router.replace('auth/sign-up')}
        style={{
            padding:15,
            backgroundColor: Colors.WHITE,
            borderRadius:15,
            marginTop:10,
            borderWidth:1
        }}>
            <Text style={{
                textAlign:'center'
            }} >Sign Up</Text>
        </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor: 'slategray',
        fontFamily: "outfit",

    }
})
