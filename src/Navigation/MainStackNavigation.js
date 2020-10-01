import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {SinginScreen} from '../screen/SinginScreen'
import {GroupScreen} from '../screen/GroupScreen'
import {AddGroupScreen} from '../screen/AddGroupScreen'
import {ChatScreen} from '../screen/ChatScreen'

const Stack = createStackNavigator();

export const MainStackNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="GroupScreen" component={GroupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

//export default MainStackNavigation;