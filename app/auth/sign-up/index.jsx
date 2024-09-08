import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { router, useNavigation } from 'expo-router'
import { Colors } from '../../../constants/Colors';

export default function SignUp() {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false,
    })
  },[])

  return (
    
    
    <View
    style={{
      padding:25,
      paddingTop:50,
      backgroundColor: Colors.WHITE,
      flex:1
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
        <Image source={require('../../../assets/images/register.jpg')}
        style={{
            width:'100%',
            height:250,
            margin: 'auto'
        }} />
        <View style={{
          marginTop:10
        }}>
          <Text style={{
              fontFamily:'outfit',
              marginBottom:5
          }}>Full Name</Text>
          <TextInput style={styles.input} placeholder="Enter Full Name" />

        </View>
        
        <View style={{
          marginTop:10
        }}>
          <Text style={{
              fontFamily:'outfit',
              marginBottom:5
          }}>Email</Text>
          <TextInput style={styles.input} placeholder="Enter Email" />

        </View>
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


        <View style={{
          marginTop:20
        }}>
        <TouchableOpacity style={{
              padding:15,
              backgroundColor: Colors.PRIMARY,
              borderRadius:15,
              marginTop:5
          }}>
              <Text style={{
                  color:Colors.WHITE,
                  textAlign:'center'
              }} >Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>router.replace('auth/sign-in')}
          style={{
              padding:15,
              backgroundColor: Colors.WHITE,
              borderRadius:15,
              marginTop:10,
              borderWidth:1
          }}>
              <Text style={{
                  textAlign:'center'
              }} >Sign In</Text>
          </TouchableOpacity>

        </View>

    </View>
  )
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