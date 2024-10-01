import { Pressable, StyleSheet, Text, View } from "react-native"
import { useModalStateContext } from "../context/ModalOpenStateContext"
import { TimePickerModal } from "react-native-paper-dates"
import TaskPriorityButton from "./TaskPriorityButton"
import { getApp } from "firebase/app"
import CustomModal from "./CustomModal"


const AddTaskPriorityModal = ({visible,setModalVisible}) => {
    const cancelChosenPriority = () => {
        setModalVisible(false);
    }

    const savePriority = () => {
        setModalVisible(false);
    }

    return (
        <CustomModal visible={visible}>
            <View style={styles.container}>
                <View style={{backgroundColor: '#363636',width: '90%',borderRadius: 8}}>
                    <View style={{height: 8}}/>
                    <Text style={styles.headerText}>Task Priority</Text>
                    <View style={{gap: 12,alignItems: 'flex-start',margin: 12}}>
                        <View style={{flexDirection: 'row', gap: 12}}>
                            <TaskPriorityButton taskPriorityNumber={1}/>
                            <TaskPriorityButton taskPriorityNumber={2}/>
                            <TaskPriorityButton taskPriorityNumber={3}/>
                            <TaskPriorityButton taskPriorityNumber={4}/>
                        </View>
                        <View style={{flexDirection: 'row', gap: 12}}>
                            <TaskPriorityButton taskPriorityNumber={5}/>
                            <TaskPriorityButton taskPriorityNumber={6}/>
                            <TaskPriorityButton taskPriorityNumber={7}/>
                            <TaskPriorityButton taskPriorityNumber={8}/>
                        </View>
                        <View style={{flexDirection: 'row', gap: 12}}>
                            <TaskPriorityButton taskPriorityNumber={9}/>
                            <TaskPriorityButton taskPriorityNumber={10}/>
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Pressable onPress={cancelChosenPriority} style={styles.button}>
                            <Text style={{color: '#8687e7',fontSize: 18, textAlign: 'center',}}>Cancel</Text>
                        </Pressable>
                        <Pressable onPress={savePriority} style={styles.buttonFilled}>
                            <Text style={{color: '#fff',fontSize: 18,textAlign: 'center',}}>Save</Text>
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

export default AddTaskPriorityModal