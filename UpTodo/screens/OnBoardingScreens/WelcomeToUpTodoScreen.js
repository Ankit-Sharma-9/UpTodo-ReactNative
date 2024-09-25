import { Image, Pressable, StyleSheet, Text, View } from "react-native"


const WelcomeToUpTodoScreen = ({navigation}) => {
    return (
        <View style={styles.onBoardingScreenStyle}>
            <View style={styles.topButtonContainer}>
                <Pressable onPress={() => {navigation.goBack()}} style={styles.lightPressableButton}>
                    <Image source={require('../../assets/images/Icons/arrow-left.png')}/>
                </Pressable>
            </View>
            <View style={styles.welcomeToUpTodoContentContainer}>
                <View style={styles.welcomeToUpTodoContent}>
                    <Text style={styles.textHeaderStyle}>Welcome To UpTodo</Text>
                    <Text style={styles.textDescriptionStyle}>Please login to your account or create new account to continue</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.filledPressableButton}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </Pressable>
                    <Pressable style={styles.hollowPressableButton}>
                        <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    onBoardingScreenStyle: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textHeaderStyle: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 32,
        lineHeight: 38.4
    },
    lightPressableButton: {
        fontSize: 16,
        lineHeight: 24.08,
        fontWeight: '400',
        color: '#ffffff70',
        paddingHorizontal: 8,
        paddingVertical: 12,
        margin: 24,
    },
    textDescriptionStyle: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24.08,
        textAlign: 'center',
        color: '#ffffffde',
    },
    filledPressableButton: {
        borderRadius: 4,
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: '#8875ff',
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24.08,
    },
    hollowPressableButton: {
        borderColor: '#8875ff',
        borderWidth: 2,
        borderRadius: 4,
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    topButtonContainer: {
        width: '100%',
    },
    bottomButtonsContainer: {
        width:'100%',
        marginBottom: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    welcomeToUpTodoContentContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    welcomeToUpTodoContent: {
        marginVertical: 32,
        gap: 24,
        width: '65%',
        alignItems: 'center'
    },  
    buttonContainer: {
        width: '86%',
        marginVertical: 48,
        gap: 32,
    },
    buttonText:{
        alignSelf: 'center',
        color: '#fff',
        lineHeight: 24.08,
        fontSize: 16,
        fontWeight: '400'
    },
})

export default WelcomeToUpTodoScreen