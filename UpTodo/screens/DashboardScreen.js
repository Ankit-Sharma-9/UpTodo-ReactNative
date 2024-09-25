import { View, Image, StyleSheet, Text } from "react-native"

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    splashImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    }
})

export default DashboardScreen