import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import TaskCardCategory from "../CategoryScreen/TaskCardCategory"
import { useUserTasksContext } from "../../context/UserTasksContext"
import { useState } from "react"

const TaskCard = ({taskId,taskHour,taskMinute,completedAt,taskTitle,taskDescription,taskCategory,priority,color,image,isCompleted}) => {
    const {tasks} = useUserTasksContext()
    const [isTaskCompleted,setIsTaskCompleted] = useState(false)
    const handleCheckTick = () => {
        setIsTaskCompleted((current) => !current);
    }  

    return (
        <View style={styles.continer}>
            <Pressable style={isTaskCompleted ? styles.selectedButton : styles.circleButton} onPress={handleCheckTick} />
            <View>
                <View>
                    <Text style={styles.taskTitleStyle} numberOfLines={1} ellipsizeMode="tail">{taskTitle}</Text>
                </View>
                <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'}}>
                    <Text style={styles.taskTimeStyle}>Today At {taskHour}:{taskMinute}</Text>
                    <View style={{flexDirection: 'row', gap: 4,}}>
                        <TaskCardCategory category={taskCategory} color={color} image={image}/>
                        <View style={styles.priorityIcon}>
                            <Image source={require('../../assets/images/Icons/flag-icon.png')}/>
                            <Text style={{color: '#fff',fontWeight: '400', fontSize: 18}}>{priority}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    continer: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#363636',
        borderRadius: 4,
        marginVertical: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    circleButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderColor: '#ffffffde',
        borderWidth: 2,
        marginLeft: 8,
        marginRight: 16
    },
    selectedButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#8687e7',
        borderWidth: 2,
        marginLeft: 8,
        marginRight: 16
    },
    taskTitleStyle: {
        color: '#ffffffde',
        fontSize: 20,
        width: 300,
        lineHeight: 48,
    },
    taskTimeStyle: {
        color: '#a8a8a8',
        fontSize: 20
    },
    priorityIcon: {
        flexDirection: 'row',
        borderRadius: 4,
        borderColor: '#8687e7',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        padding: 8,
    }
})

export default TaskCard