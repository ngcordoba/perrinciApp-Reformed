import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';

import UserTabNavigator from "./UserTabNavigator";
import HomeScreen from "../screens/PetUser/HomeScreen";
import PetProfile from "../screens/PetUser/PetProfile";
import TakeAWalk from "../screens/PetUser/TakeAWalk";
import SelectDogWalker from "../screens/PetUser/SelectDogWalker";
import Pago_MercadoPago from "../screens/PetUser/Pago_MercadoPago";
import MapViewUser from "../screens/PetUser/MapView_User";
import WalkerQualify from "../screens/PetUser/QualifyWalker";
import FinishWalk from "../screens/PetUser/FinishRide";
import SupportHelp from "../screens/SupportHelp";
import SupportAbout from "../screens/SupportHelp";
import { Button } from "react-native";
import ViewDogWalker from "../screens/PetUser/ViewDogWalker";


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
                    headerBackTitleVisible: false,
                }}
            />
            <Stack.Screen
                name="SeleccionarPaseador"
                component={SelectDogWalker}
                options={{
                    title: null,
                    headerBackTitleVisible: false,
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
                name="PagoPaseo"
                component={Pago_MercadoPago}
                options={({ route }) => ({
                    title: "Realizá tu pago",
                    headerBackTitleVisible: false,
                })}
            />
            <Stack.Screen
                // casita para volver al home.
                name="PaseoEnCurso"
                component={MapViewUser}
                options={({ route }) => ({
                    title: "Paseo en curso",
                    headerBackTitleVisible: false,
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate("TabUserNav")}
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
                })}
            />
            <Stack.Screen
                name="PaseoFinalizado"
                component={FinishWalk}
                options={({ route }) => ({
                    title: "Paseo finalizado",
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
                    title: "Acerca de PetLink",
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    )
}