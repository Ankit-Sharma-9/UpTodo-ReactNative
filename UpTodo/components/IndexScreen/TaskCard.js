import { Text, View } from "react-native"

const TaskCard = ({taskId,createdAt,completedAt,taskTitle,taskDescription,taskCategory,priority,isCompleted,}) => {
    return (
        <View>
            <View>

            </View>
            <View>
                <View>
                    <Text>Do Math Homework</Text>
                </View>
                <View>
                    <Text>Today At 16:45</Text>
                    
                </View>
            </View>
        </View>
    )
} 

export default TaskCard