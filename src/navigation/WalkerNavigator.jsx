/* Pila del usuario paseador donde estan importadas todas las screens
por las que el usuario navegará una vez que esté registrado.
*/

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/DogWalker/HomeScreen";
import MapView_DogWalker from "../screens/DogWalker/MapView_DogWalker";
import WalksActives from "../screens/DogWalker/WalksActives";
import ViewProfileDogAndUser from "../components/Walker_ViewProfileDogAndUser";
<<<<<<< Updated upstream
=======
import WalkerCBU from "../screens/DogWalker/WalkerCBU"
import RideFinished from "../screens/DogWalker/RideFinished";
>>>>>>> Stashed changes

import WalkerTabNavigator from "./WalkerTabNavigator";

import SupportHelp from "../screens/SupportHelp";
import SupportAbout from "../screens/SupportAbout";



const Stack = createNativeStackNavigator();

export default WalkerNavigator = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen
                name="TabWalkerNav"
                component={WalkerTabNavigator}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="InicioPaseador"
                component={HomeScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />


            <Stack.Screen
                name="EmpezarAPasear"
                component={MapView_DogWalker}
                options={{
                    title: "Empezar a pasear",
                    headerBackVisible: false,
                }}
            />

            <Stack.Screen
                name="VerPaseosActivos"
                component={WalksActives}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="VerPerfilUsuario"
                component={ViewProfileDogAndUser}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="PaseoFinalizado"
                component={RideFinished}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
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