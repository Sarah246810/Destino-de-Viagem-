import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BemVindo from '../pages/BemVindo'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Roteiro from '../pages/Roteiro'


const Stack = createNativeStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="BemVindo"
                component={BemVindo}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Roteiro"
                component={Roteiro}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}