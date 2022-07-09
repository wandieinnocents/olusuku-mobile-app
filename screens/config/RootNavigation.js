import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                name="Home"
                component={Home}
                options={{title:'Rydex Welcome !'}}
                />
                <Stack.Navigator name="Login" component={Login}/>
            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default NavigationContainer;