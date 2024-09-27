import { Button, Image, Modal, Pressable, StyleSheet, Text, View } from "react-native"
import ProfilePicture from "../../components/ProfilePicture"
import { useAuthContext } from "../../context/UserAuthContext"
import { ScrollView } from "react-native-gesture-handler";
import ProfileButton from "../../components/ProfileScreen/ProfileButton";

const UserProfileScreen = () => {
    const { user } = useAuthContext();

    return (
        <ScrollView style={{flex: 1, backgroundColor:"#121212"}}>
            <View style={styles.container}>

                <Text 
                style={{
                    color: '#ffffffde',
                    fontSize: 20, 
                    lineHeight: 20,
                    textAlign: 'center',
                    letterSpacing: -0.5,
                    marginVertical: 24
                    }}>
                    Profile
                </Text>
                <ProfilePicture 
                    image={require('../../assets/images/UserScreen/ProfileScreen/UserProfilePicture.jpg')} 
                    height={85} 
                    width={85}
                />
                <Text 
                    style={{
                        color: '#ffffffde',
                        fontSize: 20, 
                        lineHeight: 20,
                        textAlign: 'center',
                        letterSpacing: -0.5,
                        marginVertical: 24,
                        fontWeight: '500'
                    }}>
                    {user}
                </Text>

                <View style={styles.taskStatusButtonContainer}>
                    <View style={styles.taskStatusButton}>
                        <Text style={styles.taskStatusButtonText}>10 Task left</Text>
                    </View>
                    <View style={styles.taskStatusButton}>
                        <Text style={styles.taskStatusButtonText} >5 Task done</Text>
                    </View>
                </View>
                
                <View>
                    <Text
                        style={{marginVertical: 24,color:'#afafaf',fontSize:14,lineHeight:21}}
                    >Settings</Text>
                    <ProfileButton 
                        buttonIcon={require('../../assets/images/Icons/settings-icon.png')} 
                        buttonText='App settings' 
                    />
                </View>
                <View>
                    <Text
                        style={{marginVertical: 24,color:'#afafaf',fontSize:14,lineHeight:21}}
                    >
                        Account
                    </Text>
                    <View style={{gap: 8, width: '100%'}}>
                        <ProfileButton 
                            buttonIcon={require('../../assets/images/Icons/user-icon.png')} 
                            buttonText='Change account name' 
                            
                        />
                        <ProfileButton 
                            buttonIcon={require('../../assets/images/Icons/key-icon.png')} 
                            buttonText='Change account password' 
                        />
                        <ProfileButton 
                            buttonIcon={require('../../assets/images/Icons/camera-icon.png')} 
                            buttonText='Change account Image' 
                        />    
                    </View>
                </View>
                <View>
                    <Text
                        style={{marginVertical: 24,color:'#afafaf',fontSize:14,lineHeight:21}}
                    >Uptodo</Text>
                    <View style={{gap: 8, width: '100%'}}>
                        <ProfileButton buttonIcon={require('../../assets/images/Icons/user-icon.png')} buttonText='About US' />
                        <ProfileButton buttonIcon={require('../../assets/images/Icons/info-circle-icon.png')} buttonText='FAQ' />
                        <ProfileButton buttonIcon={require('../../assets/images/Icons/flash-icon.png')} buttonText='Help & Feedback' />    
                        <ProfileButton buttonIcon={require('../../assets/images/Icons/like-icon.png')} buttonText='Support US' />
                        <ProfileButton buttonIcon={require('../../assets/images/Icons/logout-icon.png')} buttonText='Log out' color={"#FF4949"} showRightIcon={false}/>    
                    </View>
                </View>
            </View>
            <View style={{height: 108}}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'start',
    },
    taskStatusButtonContainer: {
        width: '86%',
        gap: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    taskStatusButton: {
        backgroundColor: '#363636',
        padding: 18,
        borderRadius: 4,
        width: 164,
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskStatusButtonText: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 24,
    },
})

export default UserProfileScreen