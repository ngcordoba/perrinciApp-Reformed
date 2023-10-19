/* Pila del usuario donde estan importadas todas las screens
por las que el usuario navegará una vez que esté registrado.
*/

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/PetUser/HomeScreen";
import PetProfile from "../screens/PetUser/PetProfile";
import TakeAWalk from "../screens/PetUser/TakeAWalk";
import SelectDogWalker from "../screens/PetUser/SelectDogWalker";
import ViewWalkerProfile from "../components/User_ViewWalkerProfile";
import Pago_MercadoPago from "../screens/PetUser/Pago_MercadoPago";
import MapViewUser from "../screens/PetUser/MapView_User";
import WalkerQualify from "../screens/PetUser/QualifyWalker"
import FinishWalk from "../screens/PetUser/FinishRide"

// Menu de navegación del usuario
import UserTabNavigator from "./UserTabNavigator"


// Pantallas de soporte; común para los dos tipos de usuario
import SupportHelp from "../screens/SupportHelp"
import SupportAbout from "../screens/SupportHelp"


const Stack = createNativeStackNavigator();

export default UserNavigator = () => {
    return (
        <Stack.Navigator
        >
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
                name="VerPerfilDelPaseador"
                component={ViewWalkerProfile}
                options={({ route }) => ({
                    title: route.params.name + " " + route.params.lastName,
                })}
            />

            <Stack.Screen
                name="PagoPaseo"
                component={Pago_MercadoPago}
                options={({ route }) => ({
                    title: "Realizá tu pago",
                })}
            />



            <Stack.Screen
                // Restringir el "Back", no se puede volver para atras
                // De esta pantalla en adelante
                name="PaseoEnCurso"
                component={MapViewUser}
                options={({ route }) => ({
                    title: "Paseo en curso",
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