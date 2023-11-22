import React from "react";
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from "react-native";

// Importación de screens que varían segun el usuario logeado
// Usuario
import HomeScreen from "../screens/DogWalker/HomeScreen";
import WalkerProfile from '../screens/DogWalker/WalkerProfile';
import WalkerActivity from "../screens/DogWalker/WalkerActivity";
import Soporte from '../screens/SupportHome';
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const WalkerTabNavigator = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                tabBarActiveTintColor: "#0984E3",
                tabBarInactiveTintColor: "black"
            }}
        >
            <Tab.Screen
                name="Inicio"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={20} color={color} />
                    ),
                    headerShown: false,
                }}

            />

            <Tab.Screen
                name="Perfil"
                component={WalkerProfile}
                options={({ route }) => ({
                    title: "Mi Perfil",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" size={20} color={color} />
                    ),
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate("CBUWalker")}
                            title="CVU/CBU"
                        >
                        </Button>
                    )
                })}
            />

            <Tab.Screen
                name="Actividad"
                component={WalkerActivity}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="receipt-outline" size={20} color={color} />

                    ),
                    title: "Actividad"
                }} />

            <Tab.Screen
                name="Soporte"
                component={Soporte}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="customerservice" size={20} color={color} />
                    ),
                    title: "Soporte"
                }} />



        </Tab.Navigator>
    );
}

export default WalkerTabNavigator;