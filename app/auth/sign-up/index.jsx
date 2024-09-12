import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ToastAndroid, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useNavigation } from 'expo-router'
import { Colors } from '../../../constants/Colors';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../configs/FirebaseConfig";

export default function SignUp() {
  const navigation = useNavigation();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [fullname,setFullname] = useState();



  useEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    })
  },[])

  const onCreateAccount = ()=>{
    //easy Validation
    if(!email && !password && !fullname){
      ToastAndroid.show('All fields are required',ToastAndroid.BOTTOM)
      return;
    };
    if(password.length<6){
      ToastAndroid.show('Password should be at least 6 characters',ToastAndroid.BOTTOM)
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
    
  });
  }

  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        flex: 1,
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
          }}
        >
          Create New Account
        </Text>
        <Image
          source={require("../../../assets/images/register.jpg")}
          style={{
            width: "100%",
            height: 250,
            margin: "auto",
          }}
        />
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              marginBottom: 5,
            }}
          >
            Full Name
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Full Name"
            onChangeText={(value) => setFullname(value)}
          />
        </View>

        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              marginBottom: 5,
            }}
          >
            Email
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            onChangeText={(value) => setEmail(value)}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: 15,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            marginBottom: 5,
          }}
        >
          Password
        </Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 5,
          }}
          onPress={onCreateAccount}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
            }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace("auth/sign-in")}
          style={{
            padding: 15,
            backgroundColor: Colors.WHITE,
            borderRadius: 15,
            marginTop: 10,
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
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