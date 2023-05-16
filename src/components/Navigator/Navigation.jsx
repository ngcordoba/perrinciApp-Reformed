import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';

//screens petUser
import HomeScreen from "../../screens/PetUser/HomeScreen";
import TakeAWalk from "../../screens/PetUser/TakeAWalk";
import SelectDogWalker from "../../screens/PetUser/SelectDogWalker"
import PetProfile from "../../screens/PetUser/UserProfile"


// main screens
import Support from '../../screens/MainScreens/Support';
import Mas from '../../screens/MainScreens/Mas';

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="Support"
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Más"
                component={Mas}
                options={{
                    headerBackTitleVisible: false,

                }}
            />
            <HomeStackNavigator.Screen
                name="MiPerfil"
                component={PetProfile}
                options={{
                    headerBackTitleVisible: false,


                }}
            />

            <HomeStackNavigator.Screen
                name="SolicitarPaseo"
                component={TakeAWalk}
            />

            <HomeStackNavigator.Screen
                name="SeleccionarPaseador"
                component={SelectDogWalker}
            />

        </HomeStackNavigator.Navigator>
    )
}

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#0984E3",
                tabBarInactiveTintColor: "black"
            }}
        >
            <Tab.Screen
                name="Inicio"
                component={MyStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size='20' color={color} />
                    ),
                    headerShown: false,
                }}

            />

            <Tab.Screen
                name="MiPerfil"
                component={PetProfile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" size='20' color={color} />
                    ),
                    title: "Mi Perfil"
                }} />

            <Tab.Screen
                name="Soporte"
                component={Support}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="customerservice" size='20' color={color} />
                    ),
                }} />

            <Tab.Screen
                name="Más"
                component={Mas}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="apps" size='20' color={color} />

                    ),
                }} />




        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}