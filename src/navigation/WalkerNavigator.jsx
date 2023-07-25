/* Pila del usuario paseador donde estan importadas todas las screens
por las que el usuario navegará una vez que esté registrado.
*/

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/DogWalker/HomeScreen";
import WalkerProfile from "../screens/DogWalker/WalkerProfile";
import MapView_DogWalker from "../screens/DogWalker/MapView_DogWalker";

import LoginPage from "../screens/Autentication/SingIn"
import SingUp from "../screens/Autentication/SingUp";
import UserRegister from "../screens/Autentication/UserRegister";
import WalkerRegister from "../screens/Autentication/WalkerRegister";
import DogRegister from "../screens/Autentication/DogRegister";

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

            {/* Testeando diseño de panbtallas de Login */}
            <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="SingUp"
                component={SingUp}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="UserRegister"
                component={UserRegister}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="WalkerRegister"
                component={WalkerRegister}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="DogRegister"
                component={DogRegister}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />




        </Stack.Navigator>
    )
}