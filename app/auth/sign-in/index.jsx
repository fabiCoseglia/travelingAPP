import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View
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
        <TextInput style={styles.input} placeholder="Enter Email" />
      </View>

      <View style={{
        marginTop:15
      }}>
        <Text style={{
            fontFamily:'outfit',
            marginBottom:5
        }}>Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder="Enter Password" />
      </View>

        <TouchableOpacity style={{
            padding:15,
            backgroundColor: Colors.PRIMARY,
            borderRadius:15,
            marginTop:15
        }}>
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
            }} >Create Acount</Text>
        </TouchableOpacity>

    </View>
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
