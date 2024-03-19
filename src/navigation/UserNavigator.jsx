import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';

import UserTabNavigator from "./UserTabNavigator";
import HomeScreen from "../screens/PetUser/HomeScreen";
import PetProfile from "../screens/PetUser/PetProfile";
import TakeAWalk from "../screens/PetUser/TakeAWalk";
import SelectDogWalker from "../screens/PetUser/SelectDogWalker";
import MapViewUser from "../screens/PetUser/MapView_User";
import WalkerQualify from "../screens/PetUser/QualifyWalker";
import FinishWalk from "../screens/PetUser/FinishRide";
import SupportHelp from "../screens/SupportHelp";
import SupportAbout from "../screens/SupportAbout";
import { Button } from "react-native";
import ViewDogWalker from "../screens/PetUser/WalkRequest";


const Stack = createNativeStackNavigator();


export default UserStack = () => {

    const navigation = useNavigation();
    return (
        <Stack.Navigator initialRouteName="TabUserNav">
            <Stack.Screen
                name="TabUserNav"
                component={UserTabNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="PerfilMascota"
                component={PetProfile}
                options={{
                    title: "Perfil de mi mascota",
                    headerBackTitleVisible: false,
                }}
            />
            <Stack.Screen
                name="SolicitarPaseo"
                component={TakeAWalk}
                options={{
                    title: "Solicitar paseo",
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SeleccionarPaseador"
                component={SelectDogWalker}
                options={{
                    title: null,
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Perfildelpaseador"
                component={ViewDogWalker}
                options={({ route }) => ({
                    title: route.params.name + " " + route.params.lastName,
                })}
            />

            <Stack.Screen
                // casita para volver al home.
                name="PaseoEnCurso"
                component={MapViewUser}
                options={({ route }) => ({
                    title: "Paseo en curso",
                    headerLeft: () => false,
                    headerBackTitleVisible: false,
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.goBack("TabUserNav")}
                            title="Inicio"
                        >
                        </Button>
                    )
                })}
            />
            <Stack.Screen
                name="CalificarPaseador"
                component={WalkerQualify}
                options={({ route }) => ({
                    title: "Calificá al paseador",
                    headerLeft: () => false,
                    headerBackTitleVisible: false,

                })}
            />
            <Stack.Screen
                name="PaseoFinalizado"
                component={FinishWalk}
                options={({ route }) => ({
                    title: "Paseo finalizado",
                    headerLeft: () => false,
                    headerBackTitleVisible: false,
                })}
            />
            <Stack.Screen
                name="AyudaSoporte"
                component={SupportHelp}
                options={{
                    title: "Ayuda",
                    headerBackTitleVisible: false,
                }}
            />
            <Stack.Screen
                name="AcercaDePetLinkSoporte"
                component={SupportAbout}
                options={{
                    title: "Acerca de Perrinci",
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    )
}