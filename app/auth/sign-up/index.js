import { View, Text, TouchableOpacity, TextInput, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import {auth} from '../../../configs/firebaseConfig'
import isEmail from 'validator/es/lib/isEmail'
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  const navigation = useNavigation();
  const router = useRouter();

  const createUser = () =>{
    setIsLoading(true);
    if(!fullName || !email || !password || !isEmail(email)){
      ToastAndroid.show("Please all or correct details!", ToastAndroid.LONG);
      setIsLoading(false);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // const user = userCredential.user;
      navigation.reset({
        index: 0,
        routes: [{name: '(tabs)'}]
      });
    })
    .catch((error) => {
      const errorMessage = error.message;
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    })
    setIsLoading(false);
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
        }}>Create Account</Text>
          <Text style={{
            fontFamily: 'dm-sans-semi-bold',
            fontSize: 25,
            marginTop: 10,
            color: Colors.GRAY
          }}>Let's Sign You Up</Text>
        <Text style={{
          fontFamily: 'dm-sans-medium',
          fontSize: 20,
          marginTop: 10,
          color: Colors.FRENCH_GRAY
        }}>Enter your details</Text>
        <Text style={{
          fontFamily: 'dm-sans-medium',
          fontSize: 18,
          marginTop: 40,
          marginBottom: 5
        }}>Full Name</Text>
        <TextInput placeholder='Full Name' style={{
          padding: 10,
          paddingHorizontal: 20,
          borderWidth: 1,
          borderRadius: 12
        }}
        onChangeText={(value) => setFullName(value)}></TextInput>
        <Text style={{
          fontFamily: 'dm-sans-medium',
          fontSize: 18,
          marginTop: 20,
          marginBottom: 5
        }}
        type>Email</Text>
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
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
        ></TextInput>
        {isLoading? 
        <ActivityIndicator size={'large'} color={Colors.BLACK} style={{marginTop: 40}}/>
        :
        <TouchableOpacity 
          onPress={createUser}
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
                }}>Sign Up</Text>
          </TouchableOpacity>
        }
          <TouchableOpacity 
          onPress={()=> router.push('auth/sign-in')}
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
                }}>Login</Text>
          </TouchableOpacity>
    </View>
  )
}