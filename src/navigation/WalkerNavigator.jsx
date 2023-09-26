/* Pila del usuario paseador donde estan importadas todas las screens
por las que el usuario navegará una vez que esté registrado.
*/

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/DogWalker/HomeScreen";
import WalkerProfile from "../screens/DogWalker/WalkerProfile";
import MapView_DogWalker from "../screens/DogWalker/MapView_DogWalker";
import ActivityScreen from "../screens/DogWalker/WalkerActivity";
import WalksActives from "../screens/DogWalker/WalksActives";
import ViewProfileDogAndUser from "../components/Walker_ViewProfileDogAndUser";


// Importación de screens comunes en ambos tipos de usuario
import SupportHelp from "../screens/SupportHelp"
import SupportAbout from "../screens/SupportHelp"

const Stack = createNativeStackNavigator();

export default WalkerNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="InicioPaseador"
        >
            <Stack.Screen
                name="InicioPaseador"
                component={HomeScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="ActividadPaseador"
                component={ActivityScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="PerfilPaseador"
                component={WalkerProfile}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="EmpresarAPasear"
                component={MapView_DogWalker}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
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



        </Stack.Navigator>
    )
}