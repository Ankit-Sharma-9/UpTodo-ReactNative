import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ManageYourTasksScreen from "../screens/OnBoardingScreens/ManageYourTasksScreen";
import CreateDailyRoutineScreen from "../screens/OnBoardingScreens/CreateDailyRoutineScreen";
import OrganizeYourTasksScreen from "../screens/OnBoardingScreens/OrganizeYourTaskScreen";
import WelcomeToUpTodoScreen from "../screens/OnBoardingScreens/WelcomeToUpTodoScreen";


const OnBoardingNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default OnBoardingNavigator