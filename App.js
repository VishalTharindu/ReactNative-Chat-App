import 'react-native-gesture-handler'

import React from 'react'
import { View, Text } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {SinginScreen} from './src/screen/SinginScreen'
import {GroupScreen} from './src/screen/GroupScreen'
import {AddGroupScreen} from './src/screen/AddGroupScreen'
import {ChatScreen} from './src/screen/ChatScreen'

import {MainStackNavigation} from './src/Navigation/MainStackNavigation'

const Stack = createStackNavigator();

export default  App = () => {
  return (
      // <NavigationContainer>
      //   <Stack.Navigator>
      //       <Stack.Screen name="GroupScreen" component={GroupScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>
        <MainStackNavigation />
  );
}



