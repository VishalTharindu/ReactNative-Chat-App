import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View} from 'react-native'
import Colour from '../util/Colour'

const Button = (props) => {

    const {title = 'Enter', style = {}, textStyle = {}, onPress} = props

    return (

        <TouchableOpacity onPress={onPress} style={[style.button, style]}>
            <Text style = {[style.text, textStyle]} >{title}</Text>
        </TouchableOpacity>
            
    )

    const style = StyleSheet.create({
        button:{
            display:'flex',
            height:50,
            borderRadius: 5,
            paddingLeft:20,
            paddingRight:20,
            alignItems:"center",
            margin:20
        },

        text:{
            fontSize :16,
            textTransform : 'uppercase',
        }
    })
}
    
