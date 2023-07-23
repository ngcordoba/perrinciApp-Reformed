import React from "react";
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Soporte from './../screens/SupportHome';

// Importación de screens que varían segun el usuario logeado
// Usuario
import UserNavigation from "./UserNavigator"
import UserActivity from './../screens/PetUser/UserActivity';
import UserProfile from "../screens/PetUser/UserProfile";

// Paseador
import WalkerNavigation from "./WalkerNavigator";
import WalkerProfile from "./../screens/DogWalker/WalkerProfile";

const Tab = createBottomTabNavigator();

export default TabNavigator = () => {
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
                component={UserNavigation} // CONDICIONAR PARA TIPO DE LOGUEO -> USUARIO O PASEADOR
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={20} color={color} />
                    ),
                    headerShown: false,
                }}

            />

            <Tab.Screen
                name="Perfil"
                component={UserProfile} // VERIFICAR EL USUARIO PARA MOSTRAR EL PERFIL DEL USER O PASEADOR
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" size={20} color={color} />
                    ),
                    title: "Mi Perfil"
                }} />

            <Tab.Screen
                name="Actividad"
                component={UserActivity} // VERIFICAR EL USUARIO PARA MOSTRAR LA ACTIVIDAD DEL USER O PASEADOR
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