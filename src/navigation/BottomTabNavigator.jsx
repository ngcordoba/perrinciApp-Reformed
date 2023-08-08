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
import WalkerActivity from "../screens/DogWalker/WalkerActivity";

//Login
import LoginPage from "../screens/Autentication/SingIn"
import SingUp from "../screens/Autentication/SingUp"
import UserRegister from "../screens/Autentication/UserRegister";
import DogRegister from "../screens/Autentication/DogRegister";
import WalkerRegister from "../screens/Autentication/WalkerRegister";
import TipoDeRegistro from "../screens/Autentication/SingUpType";
import UserNavigator from "./UserNavigator";



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
                component={TipoDeRegistro} // CONDICIONAR PARA TIPO DE LOGUEO -> USUARIO O PASEADOR
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={20} color={color} />
                    ),
                    headerShown: false,
                }}

            />

            <Tab.Screen
                name="Perfil"
                component={WalkerProfile} // VERIFICAR EL USUARIO PARA MOSTRAR EL PERFIL DEL USER O PASEADOR
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" size={20} color={color} />
                    ),
                    title: "Mi Perfil"
                }} />

            <Tab.Screen
                name="Actividad"
                component={WalkerActivity} // VERIFICAR EL USUARIO PARA MOSTRAR LA ACTIVIDAD DEL USER O PASEADOR
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