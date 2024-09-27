import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IndexScreen from "../screens/UserScreens/IndexScreen";
import CalenderScreen from "../screens/UserScreens/CalenderScreen";
import FocusModeScreen from "../screens/UserScreens/FocusModeScreen";
import UserProfileScreen from "../screens/UserScreens/UserProfileScreen";
import TaskScreen from "../screens/UserScreens/TaskScreen";
import { Image, Text, View } from "react-native";
import TabNavigationIcon from "../components/IndexScreen/TabNavigationIcon";

const Tab = createBottomTabNavigator();

const UserStack = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Index"
            screenOptions={{
                showLabel: false,
                tabBarStyle: {
                    backgroundColor: "#363636",
                    borderTopWidth: 0,
                    height: 75,  
                    alignItems: 'center',
                    paddingBottom: 15
                },
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen 
                name="Index" 
                component={IndexScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabNavigationIcon focused={focused} activeIcon={require('../assets/images/Icons/home-active.png')} inactiveIcon={require('../assets/images/Icons/home-inactive.png')} title={'Index'}/>
                    )
                }}    
            />
            <Tab.Screen 
                name="Calender" 
                component={CalenderScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabNavigationIcon focused={focused} activeIcon={require('../assets/images/Icons/calendar-active.png')} inactiveIcon={require('../assets/images/Icons/calendar-inactive.png')} title={'Calendar'}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Task" 
                component={TaskScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <View
                            style={{
                                top: -32,
                                width: 64,
                                height: 64,
                                borderRadius: 32,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#8687E7'
                            }}
                        >
                            <Image 
                                source={require('../assets/images/Icons/task-add.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />

                        </View>
                    ),
                }} 
            />
            <Tab.Screen 
                name="Focus" 
                component={FocusModeScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabNavigationIcon focused={focused} activeIcon={require('../assets/images/Icons/clock-active.png')} inactiveIcon={require('../assets/images/Icons/clock-inactive.png')} title={'Focus'}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={UserProfileScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabNavigationIcon focused={focused} activeIcon={require('../assets/images/Icons/user.png')} inactiveIcon={require('../assets/images/Icons/user.png')} title={'Profile'}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default UserStack