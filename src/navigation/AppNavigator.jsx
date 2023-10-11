import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import UserNavigator from "./UserNavigator";
import WalkerNavigator from "./WalkerNavigator";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="User" component={UserNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="DogWalker" component={WalkerNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default AppNavigator;