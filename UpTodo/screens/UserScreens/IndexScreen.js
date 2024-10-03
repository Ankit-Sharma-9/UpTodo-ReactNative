import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import Navbar from "../../components/IndexScreen/Navbar"
import { useUserTasksContext } from "../../context/UserTasksContext"
import TaskCard from "../../components/IndexScreen/TaskCard"
import RNPickerSelect from 'react-native-picker-select'
import { useEffect, useState } from "react"
import Colors from "../../assets/Colors"
import { it } from "react-native-paper-dates"
import { Searchbar } from "react-native-paper"
import { FlatList } from "react-native-gesture-handler"

const IndexScreen = () => {
    const { tasks, setTasks } = useUserTasksContext()
    const [currentUserTasks,setCurrentUserTasks] = useState(tasks.filter(item => item.isCompleted === 0));

    const [completedTasks,setCompletedTask] = useState([])
    const [searchedTasks,setSearchedTasks] = useState([])

    const [searchTaskTitle,setSearchTaskTitle] = useState('');

    useEffect(() => {
        setCurrentUserTasks(tasks.filter(item => item.isCompleted === 0));
        setCompletedTask(tasks.filter(item => item.isCompleted === 1));
        setSearchedTasks(tasks.filter((item) => item.title.toLowerCase().includes(searchTaskTitle?.trim().toLowerCase())))
    },[tasks])

    const filterOnPressHandler = () => {
        setTasks((prev) => [...prev].sort((a,b) => a.taskPriority - b.taskPriority));
    }

    const onSearchHandler = (query) => {
        setSearchTaskTitle(query);
        setSearchedTasks(tasks.filter((item) => item.title.toLowerCase().includes(query.trim().toLowerCase())))
    }

    return (
        <View style={styles.container}>
            <Navbar navbarTitle='Index' filterOnPressHandler={filterOnPressHandler}/>

            <Searchbar 
                placeholder="Search for your task..."
                value={searchTaskTitle}
                onChangeText={onSearchHandler}
                style={styles.searchBar}
                inputStyle={{color: Colors.DEFAULT_TEXT_COLOR,fontSize: 18}}
                placeholderTextColor={Colors.DEFAULT_TEXT_COLOR}
                
            />
            {
                searchedTasks.length > 0 && searchTaskTitle.trim().length > 0 && (
                    <ScrollView style={styles.searchedResultsContainer}>
                        {searchedTasks.map((item) => 
                            (<TaskCard 
                                key={item.id} 
                                id={item.id} 
                                taskTitle={item.title} 
                                taskDescription={item.description} 
                                taskPriority={item.taskPriority} 
                                taskHour={item.taskHour} 
                                taskMinute={item.taskMinute} 
                                taskCategory={item.taskCategory} 
                                taskColor={item.color} 
                                taskImage={item.image} 
                                isCompleted={item.isCompleted}
                                taskDate={item.taskDate}
                            />)
                        )}
                    </ScrollView>
                )
            }
            {tasks.length !== 0 ? 
            (
                <ScrollView style={{flex: 1,width: '100%'}}>
                    <RNPickerSelect 
                        style={styles.pickerContainer}
                        activeItemStyle={{color: Colors.DEFAULT_TEXT_COLOR}}
                        dropdownItemStyle={{backgroundColor:'#000',color: '#fff'}}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Tomorrow', value: 'Tomorrow' },
                            { label: 'Yeasterday', value: 'Yeasterday' },
                        ]}
                        placeholder={{
                            label: 'Today',
                            value: 'Today'}}
                    />
                    {currentUserTasks.map((item) => (
                        <TaskCard 
                            key={item.id} 
                            id={item.id} 
                            taskTitle={item.title} 
                            taskDescription={item.description} 
                            taskPriority={item.taskPriority} 
                            taskHour={item.taskHour} 
                            taskMinute={item.taskMinute} 
                            taskCategory={item.taskCategory} 
                            taskColor={item.color} 
                            taskImage={item.image} 
                            taskDate={item.taskDate}
                            isCompleted={item.isCompleted}
                        />
                    ))}
                    <View style={{height: 100}}/>
                    {completedTasks.map((item) => (
                        <TaskCard 
                            key={item.id} 
                            id={item.id} 
                            taskTitle={item.title} 
                            taskDescription={item.description} 
                            taskPriority={item.taskPriority} 
                            taskHour={item.taskHour} 
                            taskMinute={item.taskMinute} 
                            taskCategory={item.taskCategory} 
                            taskColor={item.color} 
                            taskImage={item.image} 
                            taskDate={item.taskDate}
                            isCompleted={item.isCompleted}
                        />
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
        backgroundColor: Colors.SCREEN_BACKGROUND,
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
        // width: 100,
        color: '#fff',
        width: 20
    },
    textHeader: {
        color: Colors.DEFAULT_TEXT_COLOR,
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 30,
    },
    textDescription: {
        color: Colors.DEFAULT_TEXT_COLOR,
        fontSize: 16,
        lineHeight: 24
    },
    searchBar: {
        color: Colors.DEFAULT_TEXT_COLOR,
        backgroundColor: Colors.DEFAULT_BACKGROUND_SECONDARY,
        borderColor: Colors.DEFAULT_BORDER_COLOR,
        borderWidth: 1,
        borderRadius: 4,
        width: '90%'
    },
    searchedResultsContainer: {
        zIndex: 11,
        width:'100%',
        maxHeight: 200,
        backgroundColor: '#232323',
        borderBottomWidth: 2,
        paddingBottom: 2,
        borderColor: '#232323',
    }
})

export default IndexScreen