import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './pages/Login/index';
import Detalhe from './pages/Detalhe/index';
import Info from './pages/Infos/index';

const AppStack = createStackNavigator();

const Routes = () => {
    
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Detalhe" component={Detalhe} />
                <AppStack.Screen name="Info" component={Info} />
            </AppStack.Navigator>
        </NavigationContainer>        
    );

}

export default Routes;