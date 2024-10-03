import { Image, Pressable, StyleSheet, Text, View,ScrollView } from "react-native"
import CustomModal from "../../CustomModal";
import CustomTaskPriorityButton from "./CustomTaskPriorityButton";
import Colors from "../../../assets/Colors";
import { useUserTasksContext } from "../../../context/UserTasksContext";


const DeleteTaskModal = ({visible,setModalVisible,id,taskTitle}) => {
    const {deleteTask} = useUserTasksContext();
    
    const handleCancel = () => {
        setModalVisible(false);
    }

    const handleDelete = () => {
        deleteTask(id)
        setModalVisible(false);
    }


    return (
        <CustomModal visible={visible}>
            <View style={styles.modalWrapper}>
                <View style={styles.container}>
                    <View style={{alignItems: 'center', justifyContent: 'center',paddingBottom: 12,borderBottomColor: Colors.DEFAULT_TEXT_COLOR_SECONDARY,borderBottomWidth: 1}}>
                        <Text style={{fontSize: 24,color: '#fff'}}>Delete Task</Text>
                    </View>
                    <Text style={styles.textHeaderStyle}>Are you sure you want to delete this task?</Text>
                    <Text style={styles.textHeaderStyle}>Task title : {taskTitle}</Text>
                    
                    
                    <View style={styles.buttonsContainer}>
                        <Pressable style={styles.button} onPress={handleCancel}>
                            <Text style={{color: '#8687e7',fontSize: 18, textAlign: 'center',}}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.buttonFilled} onPress={handleDelete}>
                            <Text style={{color: '#fff',fontSize: 18,textAlign: 'center',}}>Delete</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </CustomModal>
    )
}

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
    textHeaderStyle: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 19,
        lineHeight: 24,
        textAlign: 'center',
    },
})

export default DeleteTaskModal