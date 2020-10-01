import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export const SinginScreen = () => {
    return(
        <View stayle = {style.container}>
            <Text stayle = {style.text}>SinginScreen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : '#ebebeb'

    },

    text : {
        color:'#101010',
        fontSize: 25,
        fontWeight: "bold"
    }
})

export default SinginScreen;