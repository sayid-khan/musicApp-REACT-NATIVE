import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


const MusicPlayer = () => {
  return (
    <View>
      <Ionicons name='heart-outline' size={30}/>
      <Text>MusicPlayer</Text>
    </View>
  )
}

export default MusicPlayer

const styles = StyleSheet.create({})