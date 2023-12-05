import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingIn from "../screens/Autentication/SingIn";
import SingUp from "../screens/Autentication/SingUp";
import SingUpType from "../screens/Autentication/SingUpType";
import UserRegister from "../screens/Autentication/UserRegister";
import UserRegister_Address from "../screens/Autentication/UserRegister_address";
import DogRegister from "../screens/Autentication/DogRegister";
import WalkerRegister from "../screens/Autentication/WalkerRegister";
import WalkerRegister_Address from "../screens/Autentication/WalkerRegister_address";
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
                name="RegistroUsuario_direccion"
                component={UserRegister_Address}
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
                name="RegistroPaseador_direccion"
                component={WalkerRegister_Address}
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