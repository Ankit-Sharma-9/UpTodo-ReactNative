import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import CustomImageButton from "../TaskScreen/CustomImageButton"
import { useCurrentTaskContext } from "../../context/CurrentTaskContext"
import { useModalStateContext } from "../../context/ModalOpenStateContext";
import { useUserTasksContext } from "../../context/UserTasksContext";
import CustomModal from "../CustomModal";
import { useState } from "react";
import AddCategoryModal from "../CategoryScreen/AddCategoryModal";
import AddDateCalendarModal from "../AddDateCalendarModal";
import AddTaskPriorityModal from "../AddTaskPriorityModal";


const AddTaskModal = ({modalVisible,setModalVisible}) => {
    const { title, description, setTitle, setDescription } = useCurrentTaskContext();
    const [openCategoryModal,setOpenCategoryModal] = useState(false);
    const [openCalendarModal,setOpenCalendarModal] = useState(false);
    const [openPriorityModal,setOpenPriorityModal] = useState(false);
    const toggleCalendarModalVisibilty = () => {
        setOpenCalendarModal(true);
    }
    const togglePriorityModalVisibility = () => {
        setOpenPriorityModal(true);
    } 
    const toggleCategoryModalVisibilty = () => {
        setOpenCategoryModal(true);
    }
    const { addTask } = useUserTasksContext()

    const handleTaskSubmit = () => {
        addTask()
        console.log("Task submit")
        setModalVisible(false);
    }

    return (
        <>
            <CustomModal visible={modalVisible} >
                <View style={styles.mainContainer}>
                    <View style={styles.container}>
                        <Text style={{fontSize: 24,color: '#fff'}}>Add Task</Text>
                        <TextInput style={styles.inputContainer} placeholder="Title" placeholderTextColor="#ffffffde" value={title} onChangeText={setTitle}/>
                        <TextInput style={styles.inputContainer} placeholder="Description" placeholderTextColor="#ffffffde" value={description} onChangeText={setDescription}/>
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonsLeftContainer}>
                                <CustomImageButton imageIcon={require('../../assets/images/Icons/timer-icon.png')} onPressHandler={toggleCalendarModalVisibilty}/>
                                <CustomImageButton imageIcon={require('../../assets/images/Icons/tag-icon.png')} onPressHandler={toggleCategoryModalVisibilty}/>
                                <CustomImageButton imageIcon={require('../../assets/images/Icons/flag-icon.png')} onPressHandler={togglePriorityModalVisibility}/>
                            </View>
                            <View style={styles.buttonsLeftContainer}>
                                <CustomImageButton imageIcon={require('../../assets/images/Icons/arrow-left.png')} onPressHandler={() => {setModalVisible(false)}}/>
                                <CustomImageButton imageIcon={require('../../assets/images/Icons/send-icon.png')} onPressHandler={handleTaskSubmit}/>
                            </View>
                        </View>
                    </View>
                </View>
            </CustomModal>
            <AddCategoryModal visible={openCategoryModal} setModalVisible={setOpenCategoryModal}/>
            <AddDateCalendarModal visible={openCalendarModal} setModalVisible={setOpenCalendarModal}/>
            <AddTaskPriorityModal visible={openPriorityModal} setModalVisible={setOpenPriorityModal}/>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#00000067'

    },
    container: {
        width: '100%', 
        backgroundColor: '#363636',
        gap: 24,
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20,
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
    }
})

export default AddTaskModal