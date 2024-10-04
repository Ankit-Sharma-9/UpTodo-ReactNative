import { useEffect, useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import UnknownUserStack from "./UnknownUserStack";
import UserStack from './UserStack';
import { KeyboardAvoidingView } from 'react-native';
import { useAuthContext } from '../context/UserAuthContext';

const AppNavigator = () => {
    const { user } = useAuthContext()

    const getCorrectStack = () => {
        if(user !== null) {
            return <UserStack />
        }
        return <UnknownUserStack />
    }

    return (
        <NavigationContainer>
            {getCorrectStack()}
        </NavigationContainer>    
    )
}

export default AppNavigator