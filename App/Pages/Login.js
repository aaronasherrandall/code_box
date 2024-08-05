import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../Shared/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Login() {
  return (
    <View>
      <Image source={require('./../Assets/Images/login.png')} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
        <Text style={{textAlign: 'center', marginTop: 80, fontSize: 24}}>Login/Signup</Text>
        <View style={styles.button}>
        <AntDesign name="google" size={24} color="white" 
        style={{marginRight: 10}} />
          <Text style={{color: Colors.white}}>Sign in with Google</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topContainer:{
    paddingTop: 40,
    alignItems: 'center',
  },

  container:{
    paddingTop:40,
    marginTop: -25,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },

  welcomeText:{
    fontSize:35,
    textAlign: 'center',
    fontWeight:'bold',
    paddingTop: 40,
  },

  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
