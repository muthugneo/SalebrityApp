import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import BottomMenu from './BottomMenu';
const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomMenu" component={BottomMenu} />
        </Stack.Navigator>
    )
}
export default AppStack;