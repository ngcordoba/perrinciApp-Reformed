import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingIn from "../screens/Autentication/SingIn";
import SingUp from "../screens/Autentication/SingUp";
import SingUpType from "../screens/Autentication/SingUpType";
import UserRegister from "../screens/Autentication/UserRegister";
import DogRegister from "../screens/Autentication/DogRegister";
import WalkerRegister from "../screens/Autentication/WalkerRegister";
import ForgotPassword from "../screens/Autentication/ForgotPassword"
import NewPassword from "../screens/Autentication/NewPassword";
import PasswordUpdated from "../screens/Autentication/PasswordUpdated"


const Stack = createNativeStackNavigator();

export default UserNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="SingIn"
        >
            <Stack.Screen
                name="IniciarSesion"
                component={SingIn}
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
                name="RegistrarseComo"
                component={SingUpType}
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
                name="RegistroPerro"
                component={DogRegister}
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
                name="ResetearContrasena"
                component={ForgotPassword}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="NuevaContrasena"
                component={NewPassword}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="ContrasenaActualizada"
                component={PasswordUpdated}
                options={{
                    headerBackTitleVisible: false,
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}          