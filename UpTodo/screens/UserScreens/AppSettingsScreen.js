import { StyleSheet, Text, View } from "react-native"

const AppSettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}>App Settings Screen</Text>
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

export default AppSettingsScreen