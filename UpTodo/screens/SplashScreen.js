import { View, Image, StyleSheet } from "react-native"

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.splashImage} source={require('../assets/images/UpTodo_Splash.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        alignItems: 'center',
        justifyContent: 'center',
    },
    splashImage: {
        width: 140,
        height: 180,
        resizeMode: 'cover'
    }
})

export default SplashScreen