/* Pila del usuario "común" donde estan importadas todas las screens
por las que el usuario navegará una vez que esté registrado.
*/

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/PetUser/HomeScreen";
import UserProfile from "../screens/PetUser/UserProfile";
import PetProfile from "../screens/PetUser/PetProfile";
import UserActivity from "../screens/PetUser/UserActivity";
import TakeAWalk from "../screens/PetUser/TakeAWalk";
import SelectDogWalker from "../screens/PetUser/SelectDogWalker";
import ViewWalkerProfile from "../components/ViewWalkerProfile";

// Importación de screens comunes en ambos tipos de usuario
import SupportHelp from "../screens/SupportHelp"
import SupportAbout from "../screens/SupportHelp"

const Stack = createNativeStackNavigator();

export default UserNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen
                name="InicioUsuario"
                component={HomeScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="PerfilUsuario"
                component={UserProfile}
                options={{
                    title: "Mi Perfil",
                    headerBackTitleVisible: false,


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
                name="ActividadUsuario"
                component={UserActivity}
                options={{
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