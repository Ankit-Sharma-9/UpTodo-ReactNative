import ManageYourTasksScreen from "../screens/OnBoardingScreens/ManageYourTasksScreen";
import CreateDailyRoutineScreen from "../screens/OnBoardingScreens/CreateDailyRoutineScreen";
import OrganizeYourTasksScreen from "../screens/OnBoardingScreens/OrganizeYourTaskScreen";
import WelcomeToUpTodoScreen from "../screens/OnBoardingScreens/WelcomeToUpTodoScreen";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/OnBoardingScreens/LoginScreen";
import RegisterScreen from "../screens/OnBoardingScreens/RegisterScreen";


const UnknownUserStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator 
            initialRouteName="manage-your-tasks"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                cardStyleInterpolator: ({ current, layouts }) => {
                    return {
                        cardStyle: {
                            transform: [
                                {
                                translateX: current.progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [layouts.screen.width, 0],
                                    }),
                                },
                            ],
                        },
                    };
                }
            }}
        >
            <Stack.Screen name="manage-your-tasks" component={ManageYourTasksScreen}/>
            <Stack.Screen name="create-daily-routine" component={CreateDailyRoutineScreen}/>
            <Stack.Screen name="organize-your-tasks" component={OrganizeYourTasksScreen}/>
            <Stack.Screen name="welcome-to-uptodo" component={WelcomeToUpTodoScreen}/>
            <Stack.Screen name="login-screen" component={LoginScreen}/>
            <Stack.Screen name="register-screen" component={RegisterScreen}/>
        </Stack.Navigator>
    )
}

export default UnknownUserStack