import { View, Text, TouchableOpacity, TextInput, Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../configs/firebaseConfig';

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();
  const navigation = useNavigation();

  const loginUser = () => {
    if(!email || !password){
      ToastAndroid.show("Please enter correct credentials!", ToastAndroid.LONG);
      return
    }
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      navigation.reset({
        index: 0,
        routes: [{name: '(tabs)'}]
      });
    })
    .catch((error) => {
      const errorMessage = error.message;
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    });
  }

  return (
    <View style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.BACKGROUND,
        height: '100%'
    }}>
        <TouchableOpacity onPress={()=>router.back()}>
            <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{
          fontFamily: 'dm-sans-bold',
          fontSize: 35,
          marginTop: 10,
          color: Colors.TEXT_COLOR
        }}>Welcome Back</Text>
          <Text style={{
            fontFamily: 'dm-sans-semi-bold',
            fontSize: 25,
            marginTop: 10,
            color: Colors.GRAY
          }}>Let's Sign You In</Text>
        <Text style={{
          fontFamily: 'dm-sans-medium',
          fontSize: 20,
          marginTop: 10,
          color: Colors.FRENCH_GRAY
        }}>Continue where you had left</Text>
        <Text style={{
          fontFamily: 'dm-sans-medium',
          fontSize: 18,
          marginTop: 40,
          marginBottom: 5
        }}>Email</Text>
        <TextInput placeholder='Email' style={{
          padding: 10,
          paddingHorizontal: 20,
          borderWidth: 1,
          borderRadius: 12
        }}
        onChangeText={(value) => setEmail(value)}></TextInput>
        <Text style={{
          fontFamily: 'dm-sans-medium',
          fontSize: 18,
          marginTop: 20,
          marginBottom: 5
        }}>Password</Text>
        <TextInput placeholder='Password' style={{
          padding: 10,
          paddingHorizontal: 20,
          borderWidth: 1,
          borderRadius: 12
        }}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}></TextInput>
        <TouchableOpacity 
        onPress={loginUser}
            style={{
                width: '100%',
                backgroundColor: Colors.BLACK,
                padding: 12,
                borderRadius: 10,
                marginTop: 40
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: Colors.WHITE,
                    fontFamily: 'dm-sans-semi-bold',
                    fontSize: 17
                }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=> router.push('auth/sign-up')}
            style={{
                width: '100%',
                backgroundColor: Colors.WHITE,
                padding: 12,
                borderWidth: 1,
                borderRadius: 10,
                marginTop:10
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: Colors.BLACK,
                    fontFamily: 'dm-sans-semi-bold',
                    fontSize: 17
                }}>Sign Up</Text>
          </TouchableOpacity>
    </View>
  )
}