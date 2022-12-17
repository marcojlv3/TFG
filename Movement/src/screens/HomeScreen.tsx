import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Exercise } from '../components/Exercise';

export const HomeScreen = () => {
  return (
    <View>
        <Text>HomeScreen</Text>
        <Icon
            name = "star-outline"
            size = { 50 }
        
        />
        <Exercise/>
    </View>
  )
}
