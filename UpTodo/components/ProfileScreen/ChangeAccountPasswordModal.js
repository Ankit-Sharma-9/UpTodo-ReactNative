import { Pressable, StyleSheet, Text, View } from "react-native"
import TaskPriorityButton from "../TaskPriorityButton"
import CustomModal from "../CustomModal"
import { TextInput } from "react-native-gesture-handler"
import { useState } from "react"
import Colors from "../../assets/Colors"


const ChangeAccountPasswordModal = ({visible,setModalVisible}) => {

    const [oldPassword,setOldPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');

    return (
        <CustomModal visible={visible}>
            <View style={styles.container}>
                <View style={{backgroundColor: '#363636',width: '90%',borderRadius: 8}}>
                    <View style={{height: 8}}/>
                    <Text style={styles.headerText}>Change account Password</Text>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Enter old password</Text>
                        <TextInput
                            style={styles.inputContainer}
                            placeholder="Enter old password" 
                            onChangeText={setOldPassword} 
                            value={oldPassword}
                            placeholderTextColor={Colors.DEFAULT_TEXT_COLOR}
                            secureTextEntry={true}  
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Enter new password</Text>
                        <TextInput
                            style={styles.inputContainer}
                            placeholder="Enter new password" 
                            onChangeText={setNewPassword} 
                            value={newPassword}
                            placeholderTextColor={Colors.DEFAULT_TEXT_COLOR}
                            secureTextEntry={true}  
                        />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Pressable onPress={() => setModalVisible(false)} style={styles.button}>
                            <Text style={{color: '#8687e7',fontSize: 18, textAlign: 'center',}}>Cancel</Text>
                        </Pressable>
                        <Pressable onPress={() => setModalVisible(false)} style={styles.buttonFilled}>
                            <Text style={{color: '#fff',fontSize: 18,textAlign: 'center',}}>Edit</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </CustomModal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#00000067'
    },
    headerText: {
        textAlign: 'center',
        alignSelf: 'center',
        paddingVertical: 8,
        color: '#fff',
        fontSize: 20,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1, 
        width: '90%',
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',

    },
    buttonFilled: {
        margin: 12,
        width: 150,
        backgroundColor: '#8687e7',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 4,
    },
    button: {
        margin: 12,
        width: 150,
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 4,
    },
    inputWrapper: {
        marginBottom: 16,
    },
    inputText: {
        color: Colors.DEFAULT_TEXT_COLOR_SECONDARY,
        marginHorizontal: 24,
        marginBottom: 12,
        fontSize: 16,
    },
    inputContainer: {
        color: Colors.DEFAULT_TEXT_COLOR,
        marginHorizontal: 24,
        padding: 12,
        paddingHorizontal: 18,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#979797'
    },
})

export default ChangeAccountPasswordModal