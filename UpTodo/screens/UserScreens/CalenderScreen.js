import { StyleSheet, Text, View } from "react-native"

const CalenderScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}>Calender Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        
    },
})

export default CalenderScreen