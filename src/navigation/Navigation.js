import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import SignInScreen from '../components/SignInScreen/SignInScreen';
import SignUpScreen from '../components/SignUpScreen/SignUpScreen';
import DetailsScreen from '../components/DetailsScreen/DetailsScreen';
import MoreInfoScreen from '../components/MoreInfoScreen/MoreInfoScreen';

const Stack = createNativeStackNavigator();


const Navigation = () => {
    
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}> 
                    
                    <Stack.Screen name='Home' component={HomeScreen} />  
                    <Stack.Screen name='SignIn' component={SignInScreen} />
                    <Stack.Screen name='SignUp' component={SignUpScreen} />
                    <Stack.Screen name='Details' component={DetailsScreen} />
                    <Stack.Screen name='MoreInfo' component={MoreInfoScreen} /> 
                    
                </Stack.Navigator>
            </NavigationContainer>
        );
    
};

export default Navigation;