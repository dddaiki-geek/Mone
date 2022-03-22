import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import firebase from 'firebase';

import TagMainScreen from "./src/screens/TagMainScreen";
import TagEditScreen from "./src/screens/TagEditScreen";
import TagOptionScreen from "./src/screens/TagOptionScreen";
import TagPastScreen from "./src/screens/TagPastScreen";
import TaskMainScreen from "./src/screens/TaskMainScreen";
import LogInScreen from "./src/screens/LogInScreen";
import LoggedOutScreen from "./src/screens/LoggedOutScreen";
import RegisterStep1Screen from "./src/screens/RegisterStep1Screen";
import RegisterStep2Screen from "./src/screens/RegisterStep2Screen";
import SettingScreen from "./src/screens/SettingScreen";
import SettingTimeScreen from "./src/screens/SettingTimeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import StartScreen from "./src/screens/StartScreen";
import TimerSampleScreen from "./src/screens/TimerSampleScreen";

const firebaseConfig = {
    apiKey: "AIzaSyA7dk0v-m25r9tX8AYQL9PxJik7LNtaJao",
    authDomain: "mone-6e841.firebaseapp.com",
    projectId: "mone-6e841",
    storageBucket: "mone-6e841.appspot.com",
    messagingSenderId: "742955431893",
    appId: "1:742955431893:web:ea6f4a4d8010632a292f5c"
};

require('firebase/firestore');

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App () {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="LogInScreen"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#e98099",
                    },
                    headerTitleStyle: {
                        color: "#ffffff",
                        fontSize: 24,
                        textAlign: "center",
                    },
                    headerTitle: "Mone",
                    headerTintColor: "#ffffff",
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                <Stack.Screen name="TagMainScreen" component={TagMainScreen} />
                <Stack.Screen name="TagEditScreen" component={TagEditScreen} />
                <Stack.Screen name="TagOptionScreen" component={TagOptionScreen} />
                <Stack.Screen name="TagPastScreen" component={TagPastScreen} />
                <Stack.Screen name="LoggedOutScreen" component={LoggedOutScreen} />
                <Stack.Screen name="LogInScreen" component={LogInScreen} />
                <Stack.Screen name="RegisterStep1Screen" component={RegisterStep1Screen} />
                <Stack.Screen name="RegisterStep2Screen" component={RegisterStep2Screen} />
                <Stack.Screen name="SettingScreen" component={SettingScreen} />
                <Stack.Screen name="SettingTimeScreen" component={SettingTimeScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen
                    name="TimerSampleScreen"
                    component={TimerSampleScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
