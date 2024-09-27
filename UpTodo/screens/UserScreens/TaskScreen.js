import { StyleSheet, Text, View } from "react-native"

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
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

export default TaskScreen