import { NavigationContainer, DefaultTheme, DarkTheme, ThemeProvider } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import MainTabNavigator from './MainTabNavigator';


const Navigation = () => {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={MainTabNavigator}
                options={{
                    title: "WhatsApp"
                }} />

            <Stack.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options= {({ route }) => ({
                    title: route.params.name,
                })}
                />
            <Stack.Screen
                name="Contacts"
                component={NotFoundScreen}
            />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    );
}

export default Navigation;