import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export const AddGroupScreen = () => {
    return(
        <View stayle = {style.container}>
            <Text stayle = {style.text}>add Group Screen</Text>
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

export default AddGroupScreen;