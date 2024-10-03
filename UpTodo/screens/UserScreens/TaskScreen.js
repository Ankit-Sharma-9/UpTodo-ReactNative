import { StyleSheet, Text, View } from "react-native"
import Colors from "../../assets/Colors"

const TaskScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}>Task Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SCREEN_BACKGROUND,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

export default TaskScreen