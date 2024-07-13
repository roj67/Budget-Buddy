import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from './../constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {
    const router = useRouter();
  return (
    <View style={{
        height: '100%'
    }}>
      <Image source={require('./../assets/images/login.png')} style={{
        width: '100%',
        height: '60%'
      }}/>
      <View style={styles.container}>
        <View>
            <Text style={{
                fontFamily: 'dm-sans-bold',
                fontSize: 25,
                textAlign: 'center'
            }}>
                Budget Buddy
            </Text>
            <Text style={{
                fontFamily: 'dm-sans-semi-bold',
                fontSize: 20,
                textAlign: 'center',
                marginTop: 10
            }}>Manage Your Finances with Ease</Text>
            <Text style={{
                fontFamily: 'dm-sans',
                fontSize: 14,
                textAlign: 'center',
                marginTop: 8,
                padding: 10
            }}>Whether you're planning for a major purchase, trying to save more each month, or simply want to keep track of your spending, our app provides the tools and insights you need to succeed.</Text>
        </View>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <TouchableOpacity 
            onPress={()=>router.push('auth/sign-in')}
            style={{
                width: '50%',
                backgroundColor: Colors.BLACK,
                padding: 10,
                marginRight: 5,
                borderRadius: 10
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: Colors.WHITE,
                    fontFamily: 'dm-sans-semi-bold',
                    fontSize: 17
                }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>router.push('auth/sign-up')}
            style={{
                width: '50%',
                backgroundColor: Colors.WHITE,
                borderWidth: 1,
                padding: 10,
                marginLeft: 5,
                borderRadius: 10
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: Colors.BLACK,
                    fontFamily: 'dm-sans-semi-bold',
                    fontSize: 17
                }}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BACKGROUND,
        marginTop: -20,
        height: '45%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        paddingTop: 30,
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
        paddingBottom: 60
    }
})