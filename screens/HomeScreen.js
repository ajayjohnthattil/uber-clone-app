import React from 'react'

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <Text style={styles.text}>Home Screen says hello</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color:"red",
    },
})