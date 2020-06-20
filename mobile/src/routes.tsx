import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './pages/Login/index';
import Detalhe from './pages/Detalhe/index';

const AppStack = createStackNavigator();

const Routes = () => {
    
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Detalhe" component={Detalhe} />
            </AppStack.Navigator>
        </NavigationContainer>        
    );

}

export default Routes;