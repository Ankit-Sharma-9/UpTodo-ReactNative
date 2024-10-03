import { Pressable, StyleSheet, Text, View } from "react-native"
import { useEffect, useState } from "react"
import { useUserTasksContext } from "../../context/UserTasksContext"
import { ScrollView } from "react-native-gesture-handler"
import TaskCard from "../../components/IndexScreen/TaskCard"
import HorizontalDatePicker from '@logisticinfotech/react-native-horizontal-date-picker'
import Colors from "../../assets/Colors"
import { getCurrentDateYYYYMMDD, getTomorrowDateYYYYMMDD } from "../../utils/utils"



const CalenderScreen = () => {

    const [selecedType,setSelectedType] = useState('Today');
    const [selectedDate,setSelectedDate] = useState(getCurrentDateYYYYMMDD())
    const {tasks} = useUserTasksContext()

    const [tasksToBeListed,setTasksToBeListed] = useState([])

    const onDateSelected = (date) => {
        setSelectedDate(date);
    }
    
    useEffect(() => {
        if(selecedType === 'Today') setTasksToBeListed(tasks.filter((item) => (item.taskDate === selectedDate) && item.isCompleted === 0));
        else setTasksToBeListed(tasks.filter((item) => (item.taskDate === selectedDate) && item.isCompleted === 1));
    },[tasks,selecedType,selectedDate])

    return (
        <View style={styles.container}>
            <Text style={styles.headerTextStyle}>Calender</Text>
            
            <HorizontalDatePicker 
                pickerType={'date'}
                minDate={new Date()}
                defaultSelected={new Date()}
                dayFormat={'DD'}
                monthFormat ={'MMM'}
                yearFormat ={'YYYY'}
                timeStep={120}
                returnDateFormat={'YYYY-MM-DD'}
                onDateSelected={onDateSelected}
                datePickerContainerStyle={{backgroundColor: Colors.DEFAULT_BACKGROUND_SECONDARY}}
                selectedTextStyle={{color: Colors.DEFAULT_SELECTED_TEXT_COLOR}}
                unSelectedTextStyle={{color: Colors.DEFAULT_TEXT_COLOR}}
                yearContainerStyle={{backgroundColor: Colors.DEFAULT_BACKGROUND_SECONDARY}}
                yearTextStyle={{color: Colors.DEFAULT_TEXT_COLOR}}
            />

            <View style={styles.buttonContainer}>
                <Pressable 
                    onPress={() => {setSelectedType('Today')}} 
                    style={selecedType === 'Today' ? styles.activeButton : styles.inactiveButton}
                >
                    <Text style={styles.text}>Today</Text>
                </Pressable>
                <Pressable onPress={() => {setSelectedType('Completed')}} style={selecedType === 'Completed' ? styles.activeButton : styles.inactiveButton}>
                    <Text style={styles.text}>Completed</Text>
                </Pressable>
            </View>
            <ScrollView style={{flex: 1,width: '100%'}}>
            {tasksToBeListed.length !== 0 &&
                (<>
                    {tasksToBeListed.map((item) => (
                        <TaskCard 
                            key={item.id} 
                            id={item.id}
                            taskTitle={item.title} 
                            taskDescription={item.description} 
                            priority={item.taskPriority} 
                            taskHour={item.taskHour} 
                            taskMinute={item.taskMinute} 
                            taskCategory={item.taskCategory} 
                            color={item.color} 
                            image={item.image} 
                            isCompleted={item.isCompleted}
                        />
                    ))}
                    <View style={{height: 100}}/>
                </>) 
            }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        
    },
    headerTextStyle:{
        alignSelf: 'start',
        color: '#ffffffde',
        fontSize: 24,
        lineHeight: 30,
        marginVertical: 24,
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        backgroundColor: '#4c4c4c',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        borderRadius: 4,
        marginTop:24,
        marginBottom:12
    },
    activeButton: {
        maxWidth: 200,
        width: '47%',
        backgroundColor: '#8687e7',
        borderWidth: 2,
        borderColor: '#8687e7',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inactiveButton: {
        maxWidth: 200,
        width: '47%',
        borderColor: '#979797',
        borderWidth: 2,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#ffffffde',
        marginHorizontal: 24,
        marginVertical: 12,
        fontSize: 18,
    }
})

export default CalenderScreen