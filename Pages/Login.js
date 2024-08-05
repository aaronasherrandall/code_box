import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Login() {
  return (
    <View style={styles.topContainer}>
      <Image source={require('./../App/Assets/Images/login.png')} />
      <View style={styles.welcomeText}>
        <Text style={styles.welcomeText}>Welcome to CodeBox</Text>
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
  },

  welcomeText:{
    fontSize:35,
    textAlign: 'center',
    fontWeight:'bold',
    paddingTop: 40
  }
});
