import { Image, Pressable, StyleSheet, Text, View,ScrollView } from "react-native"
import CustomModal from "../../CustomModal";
import CustomTaskPriorityButton from "./CustomTaskPriorityButton";
import Colors from "../../../assets/Colors";
import { useState } from "react";


const EditTaskPriorityModal = ({visible,setModalVisible,taskPriority,setPriority}) => {
    const [currentTaskPriority,setCurrentTaskPriority] = useState(taskPriority);

    const handleCancel = () => {
        setModalVisible(false);
    }

    const handleEdit = () => {
        setPriority(currentTaskPriority)
        setModalVisible(false);
    }


    return (
        <CustomModal visible={visible}>
            <View style={styles.modalWrapper}>
                <View style={styles.container}>
                    <View style={{alignItems: 'center', justifyContent: 'center',paddingBottom: 12,borderBottomColor: Colors.DEFAULT_TEXT_COLOR_SECONDARY,borderBottomWidth: 1}}>
                        <Text style={{fontSize: 24,color: '#fff'}}>Edit Task Priority</Text>
                    </View>
                    
                    <View style={{gap: 12,alignItems: 'flex-start'}}>
                        <View style={{flexDirection: 'row', gap: 4}}>
                            <CustomTaskPriorityButton mainPriority={currentTaskPriority} taskPriorityNumber={1} setTaskPriority={setCurrentTaskPriority}/>
                            <CustomTaskPriorityButton mainPriority={currentTaskPriority} taskPriorityNumber={2}  setTaskPriority={setCurrentTaskPriority}/>
                            <CustomTaskPriorityButton mainPriority={currentTaskPriority} taskPriorityNumber={3} setTaskPriority={setCurrentTaskPriority}/>
                            <CustomTaskPriorityButton mainPriority={currentTaskPriority} taskPriorityNumber={4} setTaskPriority={setCurrentTaskPriority}/>
                        </View>
                        <View style={{flexDirection: 'row', gap: 4}}>
                            <CustomTaskPriorityButton mainPriority={currentTaskPriority} taskPriorityNumber={5} setTaskPriority={setCurrentTaskPriority}/>
                            <CustomTaskPriorityButton mainPriority={currentTaskPriority} taskPriorityNumber={6} setTaskPriority={setCurrentTaskPriority}/>
                            <CustomTaskPriorityButton mainPriority={currentTaskPriority} taskPriorityNumber={7} setTaskPriority={setCurrentTaskPriority}/>
                            <CustomTaskPriorityButton mainPriority={currentTaskPriority} taskPriorityNumber={8} setTaskPriority={setCurrentTaskPriority}/>
                        </View>
                        <View style={{flexDirection: 'row', gap: 4}}>
                            <CustomTaskPriorityButton mainPriority={currentTaskPriority} taskPriorityNumber={9} setTaskPriority={setCurrentTaskPriority}/>
                            <CustomTaskPriorityButton mainPriority={currentTaskPriority} taskPriorityNumber={10} setTaskPriority={setCurrentTaskPriority}/>
                        </View>
                    </View>
                    
                    <View style={styles.buttonsContainer}>
                        <Pressable style={styles.button} onPress={handleCancel}>
                            <Text style={{color: '#8687e7',fontSize: 18, textAlign: 'center',}}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.buttonFilled} onPress={handleEdit}>
                            <Text style={{color: '#fff',fontSize: 18,textAlign: 'center',}}>Edit</Text>
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
})

export default EditTaskPriorityModal