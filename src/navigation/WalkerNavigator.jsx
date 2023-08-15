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

import LoginPage from "../screens/Autentication/SingIn"
import SingUp from "../screens/Autentication/SingUp";
import UserRegister from "../screens/Autentication/UserRegister";
import WalkerRegister from "../screens/Autentication/WalkerRegister";
import DogRegister from "../screens/Autentication/DogRegister";
import SingUpType from "../screens/Autentication/SingUpType"


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

            {/* Testeando diseño de panbtallas de Login */}
            <Stack.Screen
                name="IniciarSesion"
                component={LoginPage}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Registrarse"
                component={SingUp}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="RegistroUsuario"
                component={UserRegister}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="RegistroPaseador"
                component={WalkerRegister}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="RegistroPerro"
                component={DogRegister}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="tipoDeRegistro"
                component={SingUpType}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />






        </Stack.Navigator>
    )
}