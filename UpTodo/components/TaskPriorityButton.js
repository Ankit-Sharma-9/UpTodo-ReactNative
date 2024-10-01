import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { useCurrentTaskContext } from "../context/CurrentTaskContext"


const TaskPriorityButton = ({taskPriorityNumber}) => {
    const {taskPriority, setTaskPriority} = useCurrentTaskContext()
    const handlePress = () => {
        setTaskPriority(taskPriorityNumber)
    }

    return (
        <Pressable style={taskPriority !== taskPriorityNumber ? styles.container : styles.selectedContainer} onPress={handlePress}>
            <Image style={styles.image} source={require('.././assets/images/Icons/flag-icon.png')} />
            <Text style={styles.text}>{taskPriorityNumber}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        width: 80,
        height: 100,
        backgroundColor: '#262626',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        color: '#ffffffde',
        fontSize: 16,
    },
    image: {
        height: 24,
        width: 24
    },
    selectedContainer: {
        borderRadius: 6,
        width: 80,
        height: 100,
        backgroundColor: '#8687e7',
        alignItems: 'center',
        justifyContent: 'center',

    }
})

export default TaskPriorityButton