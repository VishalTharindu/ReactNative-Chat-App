
import React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export const  GroupScreen = () => {
    return(
        <View stayle = {style.container}>
            <Text stayle = {style.text}>GroupScreen</Text>
        </View>
    )
}

// export default GroupScreen;

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

