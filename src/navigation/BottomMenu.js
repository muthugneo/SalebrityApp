import React from 'react';
import { View, Text, Image, ScrollView, ToastAndroid, TouchableOpacity, BackHandler } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import styles from './BottomMeny.Style';
import Page1 from '../screens/Page1/Page1';
import Page2 from '../screens/Page2/Page2';
import Page3 from '../screens/Page3/Page3';
import Page4 from '../screens/Page4/Page4';
import Page5 from '../screens/Page5/Page5';
const BottomMenu = () => {
    return (
        <Tab.Navigator initialRouteName="Sales"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#DDCFC6",
                    width: "97%",
                    height: 70,
                    borderRadius: 10,
                    position: 'absolute',
                    bottom: 10,
                    left: 8,
                    elevation: 0,
                    ...styles.shadow
                },
            }}>
            <Tab.Screen name="Connect" component={Page1}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
                            <Image source={require('../assets/images/mail_icon.png')}
                                resizeMode="contain" style={{ width: 24, height: 24, tintColor: focused ? '#2E2E2E' : '#2E2E2E' }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="GNote" component={Page2}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
                            <Image source={require('../assets/images/wish_icon.png')}
                                resizeMode="contain" style={{ width: 24, height: 24, tintColor: focused ? '#2E2E2E' : '#2E2E2E' }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Sales" component={Page3}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
                            <Image source={require('../assets/images/sales_icon.png')}
                                resizeMode="contain" style={{ width: 64, height: 64, }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Profile" component={Page4}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
                            <Image source={require('../assets/images/clock_icon.png')}
                                resizeMode="contain" style={{ width: 24, height: 24, tintColor: focused ? '#2E2E2E' : '#2E2E2E' }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Events" component={Page5}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 0 }}>
                            <Image source={require('../assets/images/group_people_icon.png')}
                                resizeMode="contain" style={{ width: 24, height: 24, tintColor: focused ? '#2E2E2E' : '#2E2E2E' }}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}
export default BottomMenu;