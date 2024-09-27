import { Image, StyleSheet, Text, View } from "react-native"
import Navbar from "../../components/IndexScreen/Navbar"

const IndexScreen = () => {
    return (
        <View style={styles.container}>
            <Navbar navbarTitle='Index'/>
            <View style={styles.contentContainer}>
                <Image source={require('../../assets/images/UserScreen/IndexScreen/IndexScreenChecklistImage.png')}/>
                <Text style={styles.textHeader}>What do you want to do today?</Text>
                <Text style={styles.textDescription}>Tap + to add your tasks</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'start',
    },
    contentContainer: {
        height: 500,
        gap: 12,
        alignItems: 'center',
        justifyContent: "center",
    },
    textHeader: {
        color: '#ffffffde',
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 30,
    },
    textDescription: {
        color: '#ffffffde',
        fontSize: 16,
        lineHeight: 24
    }
})

export default IndexScreen