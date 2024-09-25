import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const CreateDailyRoutineScreen = ({navigation}) => {
    return (
        <View style={styles.onBoardingScreenStyle}>
            <View style={styles.topButtonContainer}>
                <Pressable onPress={() => navigation.navigate('welcome-to-uptodo')}>
                    <Text style={styles.lightPressableButton}>SKIP</Text>
                </Pressable>
                <View style={styles.onBoardingScreenInfo}>
                    <Image source={require('../../assets/images/OnBoarding/CreateDailyRoutine.png')}/>
                    <Image source={require('../../assets/images/OnBoarding/OnboardingNavIcon2.png')} />
                    <Text style={styles.textHeaderStyle}>Create daily routine</Text>
                    <Text style={styles.textDescriptionStyle}>In Uptodo  you can create your personalized routine to stay productive</Text>
                </View>
            </View>
            <View style={styles.bottomButtonsContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={styles.lightPressableButton}>BACK</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('organize-your-tasks')}>
                    <Text style={styles.filledPressableButton}>NEXT</Text>
                </Pressable>
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
        paddingHorizontal: 24,
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
        margin: 24,
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
    onBoardingScreenInfo: {
        alignItems: 'center',
        alignSelf: 'center',
        width: '80%',
        gap: 48
    }
})

export default CreateDailyRoutineScreen