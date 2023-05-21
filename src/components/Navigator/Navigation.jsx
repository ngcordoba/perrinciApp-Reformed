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
import userProfile from "../../screens/PetUser/UserProfile"
import PetProfile from "../../screens/PetUser/PetProfile";

// screens dogWalker
import WalkerProfile from "../../screens/DogWalker/WalkerProfile"
import ViewWalkerPofile from "../../components/ViewWalkerProfile"




// main screens
import Support from '../../screens/MainScreens/Support';
import More from '../../screens/MainScreens/Mas';

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
                component={More}
                options={{
                    headerBackTitleVisible: false,
                }}

            />
            <HomeStackNavigator.Screen
                name="MiPerfil"
                component={userProfile}
                options={{
                    headerBackTitleVisible: false,


                }}
            />

            <HomeStackNavigator.Screen
                name="SolicitarPaseo"
                component={TakeAWalk}
                options={{
                    title: "Solicitar paseo",
                    headerBackTitleVisible: false,
                }}
            />

            <HomeStackNavigator.Screen
                name="SeleccionarPaseador"
                component={SelectDogWalker}
                options={{
                    title: null,
                    headerBackTitleVisible: false,
                }}

            />

            <HomeStackNavigator.Screen
                name="PetProfile"
                component={PetProfile}
                options={{
                    title: null,
                    headerBackTitleVisible: false,
                }}

            />

            <HomeStackNavigator.Screen
                name="ViewWalkerProfile"
                component={ViewWalkerPofile}
                options={({ route }) => ({
                    title: route.params.name,
                })}


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
                component={userProfile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" size='20' color={color} />
                    ),
                    title: "Mi Perfil"
                }} />

            <Tab.Screen
                name="Más"
                component={More}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="receipt-outline" size='20' color={color} />

                    ),
                    title: "Actividad"
                }} />

            <Tab.Screen
                name="Soporte"
                component={Support}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="customerservice" size='20' color={color} />
                    ),
                    title: "Soporte"
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