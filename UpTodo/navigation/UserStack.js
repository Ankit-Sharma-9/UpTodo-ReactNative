import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IndexScreen from "../screens/UserScreens/IndexScreen";
import CalenderScreen from "../screens/UserScreens/CalenderScreen";
import FocusModeScreen from "../screens/UserScreens/FocusModeScreen";
import UserProfileScreen from "../screens/UserScreens/UserProfileScreen";
import TaskScreen from "../screens/UserScreens/TaskScreen";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import TabNavigationIcon from "../components/IndexScreen/TabNavigationIcon";
import { useState } from "react";
import CustomModal from "../components/CustomModal";
import AddTaskModal from "../components/IndexScreen/AddTaskModal";
import AddDateCalendarModal from "../components/AddDateCalendarModal";
import { useModalStateContext } from "../context/ModalOpenStateContext";
import AddTimeModal from "../components/AddTimeModal";
import AddTaskPriorityModal from "../components/AddTaskPriorityModal";
import AddCategoryModal from "../components/CategoryScreen/AddCategoryModal";

const Tab = createBottomTabNavigator();

const UserStack = () => {
    const [modalVisible,setModalVisible] = useState(false)
    const {calendarModalOpen,timeModalOpen,taskPriorityOpen,categoryModalOpen,togglePriorityModalVisibility,toggleCalendarModalVisibilty,toggleTimeModalVisibilty,toggleCategoryModalVisibilty} = useModalStateContext()

    const modalVisibilityToggle = () => {
        setModalVisible((currState) => !currState)
    }

    return (
        <>
            <AddTaskModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
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
                            <Pressable
                                style={{
                                    top: -32,
                                    width: 64,
                                    height: 64,
                                    borderRadius: 32,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#8687E7'
                                }}
                                onPress={modalVisibilityToggle}
                            >
                                <Image 
                                    source={require('../assets/images/Icons/task-add.png')}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30,
                                    }}
                                />

                            </Pressable>
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
        </>
    )
}



export default UserStack