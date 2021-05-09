import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatsScreen from '../screens/ChatsScreen';

const MainTab = createMaterialTopTabNavigator();

const MainTabNavigator = () => {
    return (
        <MainTab.Navigator>
            <MainTab.Screen
                name="Camera"
                component={TabOneNavigator}
            />
            <MainTab.Screen
                name="Chats"
                component={ChatsScreen}
            />
            <MainTab.Screen
                name="Status"
                component={TabTwoNavigator}
            />
            <MainTab.Screen
                name="Calls"
                component={TabTwoNavigator}
            />
        </MainTab.Navigator>
    );
}

const TabOneStack = createStackNavigator();

const TabOneNavigator = () => {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={NotFoundScreen}
                options={{ headerTitle: 'Tab One Title' }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator();

const TabTwoNavigator = () => {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={NotFoundScreen}
                options={{ headerTitle: 'Tab Two Title' }}
            />
        </TabTwoStack.Navigator>
    );
}

export default MainTabNavigator;