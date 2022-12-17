import React from "react"
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { styles } from '../theme/style';
import { BaseExercise } from '../classes/BaseExercise';

export const Exercise = () => {

    const item = new BaseExercise('nombre','descripcion',1,[1],'image','video');

    return (
        <View style={[styles.listContainer, styles.eBorder]}>
            <Text>Exercise Name</Text>
            <Icon 
            name = "star-outline"
                size = { 50 }
            />
            <Text>{ item.description }</Text>
        </View>
    )
}
