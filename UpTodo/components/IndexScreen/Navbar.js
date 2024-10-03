import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import ProfilePicture from "../ProfilePicture"


const Navbar = ({navbarTitle,filterOnPressHandler}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={filterOnPressHandler}>
                <Image 
                    style={styles.hamburgerIconStyle}
                    source={require('../../assets/images/Icons/sort.png')}
                />
            </Pressable>
            <Text 
                style={styles.titleTextStyle}
            >
                {navbarTitle}
            </Text>
            <ProfilePicture 
                image={require('../../assets/images/UserScreen/ProfileScreen/UserProfilePicture.jpg')}
                height={42}
                width={42}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 42,
        width: '86%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 24
    },
    hamburgerIconStyle: {
        margin: 9,
    },
    titleTextStyle: {
        color: '#ffffffde',
        fontSize: 20,
        lineHeight: 20,
        textAlign: 'center',
        letterSpacing: -0.5,
    },
})

export default Navbar