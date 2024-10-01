import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import Navbar from "../../components/IndexScreen/Navbar"
import { useUserTasksContext } from "../../context/UserTasksContext"
import TaskCard from "../../components/IndexScreen/TaskCard"
import RNPickerSelect from 'react-native-picker-select'
import { useState } from "react"

const IndexScreen = () => {
    const { tasks } = useUserTasksContext()
    const inCompleteTasks = tasks;
    const completeTasks = tasks;

    return (
        <View style={styles.container}>
            <Navbar navbarTitle='Index'/>
            <RNPickerSelect 
                style={styles.pickerContainer}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Today', value: 'Today' },
                    { label: 'Tomorrow', value: 'Tomorrow' },
                    { label: 'Yeasterday', value: 'Yeasterday' },
                ]}
            />
            {tasks.length !== 0 ? 
            (
                <ScrollView style={{flex: 1,width: '100%'}}>
                    {inCompleteTasks.map((item,index) => (
                        <TaskCard key={index} taskTitle={item.title} taskDescription={item.description} priority={item.taskPriority} taskHour={item.taskHour} taskMinute={item.taskMinute} taskCategory={item.taskCategory} color={item.color} image={item.image}/>
                    ))}
                    <View style={{height: 308}}/>
                </ScrollView>
            ) 
            : 
            (
                <View style={styles.contentContainer}>
                    <Image source={require('../../assets/images/UserScreen/IndexScreen/IndexScreenChecklistImage.png')}/>
                    <Text style={styles.textHeader}>What do you want to do today?</Text>
                    <Text style={styles.textDescription}>Tap + to add your tasks</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'start',
    },
    contentContainer: {
        height: 500,
        gap: 12,
        alignItems: 'center',
        justifyContent: "center",
    },
    pickerContainer: {
        width: 100,
        color: '#fff',
    },
    textHeader: {
        color: '#ffffffde',
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 30,
    },
    textDescription: {
        color: '#ffffffde',
        fontSize: 16,
        lineHeight: 24
    }
})

export default IndexScreen