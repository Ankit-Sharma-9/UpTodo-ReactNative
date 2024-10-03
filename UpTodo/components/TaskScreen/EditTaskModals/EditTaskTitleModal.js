import { Pressable, StyleSheet, Text, View, TextInput } from "react-native"
import CustomModal from "../../CustomModal"
import CustomImageButton from "../CustomImageButton"

const EditTaskTitleModal = ({visible,setVisible,title,description,setTitle,setDescription}) => {

    return (
        <CustomModal visible={visible}>
            <View style={styles.modalWrapper}>
                <View style={styles.container}>
                    <Text style={{fontSize: 24,color: '#fff'}}>Edit Task Title</Text>
                    <TextInput style={styles.inputContainer} placeholder="Title" placeholderTextColor="#ffffffde" value={title} onChangeText={setTitle}/>
                    <TextInput style={styles.inputContainer} placeholder="Description" placeholderTextColor="#ffffffde" value={description} onChangeText={setDescription}/>
                    
                    <View style={styles.buttonsContainer}>
                        <Pressable style={styles.button} onPress={() => setVisible(false)}>
                            <Text style={{color: '#8687e7',fontSize: 18, textAlign: 'center',}}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.buttonFilled} onPress={() => setVisible(false)}>
                            <Text style={{color: '#fff',fontSize: 18,textAlign: 'center',}}>Edit</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </CustomModal>
    )
}

export default EditTaskTitleModal

const styles = StyleSheet.create({
    modalWrapper: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#00000067'
    },
    container: {
        width: '90%', 
        backgroundColor: '#363636',
        gap: 24,
        borderRadius: 4, 
        padding: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        backgroundColor: '#363636', 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonsLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer: {
        fontSize: 18,
        padding: 12,
        paddingHorizontal: 16,
        borderColor: '#979797',
        borderWidth: 1,
        width: '100%',
        borderRadius: 4,
        color: '#ffffffde'
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
})
