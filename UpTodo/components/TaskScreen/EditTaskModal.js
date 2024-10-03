import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import CustomModal from "../CustomModal";
import { useState } from "react";
import Colors from "../../assets/Colors";
import { convertYYYYMMDDtoDDMMM } from "../../utils/utils";
import EditTaskTitleModal from "./EditTaskModals/EditTaskTitleModal";
import EditTaskCategoryModal from "./EditTaskModals/EditTaskCategoryModal";
import EditTaskPriorityModal from "./EditTaskModals/EditTaskPriorityModal";
import DeleteTaskModal from "./EditTaskModals/DeleteTaskModal";
import EditTaskTimeModal from "./EditTaskModals/EditTaskTimeModal";
import { useUserTasksContext } from "../../context/UserTasksContext";



const EditTaskModal = ({visible,setModalVisible,id,taskHour,taskMinute,taskTitle,taskDescription,taskCategory,taskPriority,taskColor,taskImage,taskDate,isCompleted}) => {
    const { updateTask } = useUserTasksContext();

    const [title,setTitle] = useState(taskTitle);
    const [description,setDescription] = useState(taskDescription);
    const [hour,setHour] = useState(taskHour);
    const [minute,setMinute] = useState(taskMinute);
    const [category,setCategory] = useState(taskCategory);
    const [priority,setPriority] = useState(taskPriority);
    const [color,setColor] = useState(taskColor);
    const [image,setImage] = useState(taskImage);
    const [date,setDate] = useState(taskDate);

    const [openEditTitleModal,setOpenEditTitleModal] = useState(false);
    const [openEditTimeModal,setOpenEditTimeModal] = useState(false);
    const [openEditPriorityModal,setOpenEditPriorityModal] = useState(false);
    const [openEditCategoryModal,setOpenEditCategoryModal] = useState(false);
    const [openDeleteTaskModal,setOpenDeleteTaskModal] = useState(false);

    const ResetCurrentEditsAndGoback = () => {
        ResetCurrentEdits()
        setModalVisible(false);
    }

    const ResetCurrentEdits = () => {
        setCategory(taskCategory);
        setColor(taskColor);
        setDate(taskDate);
        setDescription(taskDescription);
        setHour(taskHour);
        setImage(taskImage);
        setMinute(taskMinute);
        setPriority(taskPriority);
        setTitle(taskTitle);
    }

    const EditTask = () => {
        const updatedTask = {
            id,
            title,
            description,
            taskDate: date,
            taskHour: hour,
            taskMinute: minute,
            taskPriority: priority,
            taskCategory: category,
            color,  
            image, 
            isCompleted: isCompleted
        }
        console.log(updatedTask);
        updateTask(updatedTask);
        // console.log({id,category,color,date,description,hour,minute,priority,title});
        setModalVisible(false);
    }


    return (
        <CustomModal visible={visible}>
            <View style={styles.container}>
                <View style={{width: '100%',gap: 12}}>
                    <View style={styles.topButtonContainer}>
                        <Pressable style={styles.button} onPress={ResetCurrentEditsAndGoback}>
                            <Image style={styles.buttonImage} source={require('../../assets/images/Icons/cross.png')}/>
                        </Pressable>
                        <Pressable style={styles.button} onPress={ResetCurrentEdits}>
                            <Image style={styles.buttonImage} source={require('../../assets/images/Icons/repeat.png')}/>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                        <Pressable style={{height: 64,alignItems: 'center',justifyContent:'center',marginLeft: 16,}}>
                            <View style={true ? styles.selectedButton : styles.circleButton}/>
                        </Pressable>
                        <Pressable>
                            <View>
                                <Text style={styles.taskTitle} numberOfLines={1} ellipsizeMode="tail">{title}</Text>
                            </View>
                            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'}}>
                                <Text style={styles.taskDescription} numberOfLines={1}>{description}</Text>
                            </View>
                        </Pressable>
                        <View style={{right: 34}}>
                            <Pressable style={styles.button} onPress={() => {setOpenEditTitleModal(true)}}>
                                <Image style={styles.buttonImage} source={require('../../assets/images/Icons/edit.png')} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.taskAttributeRow}>
                        <View style={{flexDirection: 'row',marginLeft: 24,gap:12,}}>
                            <Image source={require('../../assets/images/Icons/timer-icon.png')}/>
                            <Text style={styles.taskDescriptionStyle}>Task Time: </Text>
                        </View>
                        <Pressable style={{padding: 12,marginRight: 24,backgroundColor: Colors.DEFAULT_BACKGROUND_SECONDARY,borderRadius:4}} onPress={() => setOpenEditTimeModal(true)}>
                            <Text style={styles.buttonTextStyle}>{date !== undefined && convertYYYYMMDDtoDDMMM(date)} at {hour}:{minute < 10 && '0'}{minute}</Text>
                        </Pressable>
                    </View>
                    <View style={styles.taskAttributeRow}>
                        <View style={{flexDirection: 'row',marginLeft: 24,gap:12,}}>
                            <Image source={require('../../assets/images/Icons/tag-icon.png')}/>
                            <Text style={styles.taskDescriptionStyle}>Task Category: </Text>
                        </View>
                        <Pressable style={{padding: 12,marginRight: 24,backgroundColor: Colors.DEFAULT_BACKGROUND_SECONDARY,borderRadius:4,flexDirection:'row',alignItems:'center',gap:12}} onPress={() => setOpenEditCategoryModal(true)}>
                            <Image style={styles.buttonImage} source={image}/>
                            <Text style={styles.buttonTextStyle}>{category}</Text>
                        </Pressable>
                    </View>
                    <View style={styles.taskAttributeRow}>
                        <View style={{flexDirection: 'row',marginLeft: 24,gap:12,}}>
                            <Image source={require('../../assets/images/Icons/flag-icon.png')}/>
                            <Text style={styles.taskDescriptionStyle}>Task Priority: </Text>
                        </View>
                        <Pressable style={{padding: 12,marginRight: 24,backgroundColor: Colors.DEFAULT_BACKGROUND_SECONDARY,borderRadius:4,flexDirection:'row',alignItems:'center',gap:12}} onPress={() => setOpenEditPriorityModal(true)}>
                            <Image style={styles.buttonImage} source={require('../.././assets/images/Icons/flag-icon.png')}/>
                            <Text style={styles.buttonTextStyle}>{priority}</Text>
                        </Pressable>
                    </View>
                    <View style={styles.taskAttributeRow}>
                        <View style={{flexDirection: 'row',marginLeft: 24,gap:12,}}>
                            <Image source={require('../../assets/images/Icons/hierarchy.png')}/>
                            <Text style={styles.taskDescriptionStyle}>Sub-Task: </Text>
                        </View>
                        <Pressable style={{padding: 12,marginRight: 24,backgroundColor: Colors.DEFAULT_BACKGROUND_SECONDARY,borderRadius:4}}>
                            <Text style={styles.buttonTextStyle}>Add Sub-Task</Text>
                        </Pressable>
                    </View>
                    <Pressable style={{marginTop: 24}} onPress={() => {setOpenDeleteTaskModal(true)}}>
                        <View style={{flexDirection: 'row',marginLeft: 24,gap:12}}>
                            <Image source={require('../../assets/images/Icons/trash.png')}/>
                            <Text style={{fontSize: 18,color: '#FF4949'}}>Delete Task</Text>
                        </View>
                    </Pressable>
                </View>

                <Pressable  style={styles.buttonFilled} onPress={EditTask}>
                    <Text style={{color: '#fff',fontSize: 18,textAlign: 'center',}}>Edit Task</Text>
                </Pressable>
            </View>
            <EditTaskTitleModal visible={openEditTitleModal} setVisible={setOpenEditTitleModal} title={title} setTitle={setTitle} description={description} setDescription={setDescription}/>
            <EditTaskCategoryModal visible={openEditCategoryModal} mainCategory={taskCategory} mainColor={taskColor} mainImage={taskImage} setModalVisible={setOpenEditCategoryModal} selectedCategory={category} setCategory={setCategory} color={color} setColor={setColor} image={image} setImage={setImage}/>
            <EditTaskPriorityModal visible={openEditPriorityModal} setModalVisible={setOpenEditPriorityModal} mainPriority={taskPriority} taskPriority={taskPriority} setPriority={setPriority}/>
            {openEditTimeModal && <EditTaskTimeModal setModalVisible={setOpenEditTimeModal} setDate={setDate} setHour={setHour} setMinute={setMinute}/>}
            <DeleteTaskModal visible={openDeleteTaskModal} setModalVisible={setOpenDeleteTaskModal} id={id} taskTitle={taskTitle}/>
        </CustomModal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 10,
        backgroundColor: '#121212',
        justifyContent: 'space-between'
    },
    inputWrapper: {
        marginBottom: 16,
    },
    headerTitle: {
        color: '#ffffffde',
        backgroundColor: '#121212',
        padding: 24,
        fontSize: 24,
    },
    inputText: {
        color: '#fff',
        marginHorizontal: 24,
        marginBottom: 12,
        fontSize: 18,
    },
    inputContainer: {
        color: '#fff',
        marginHorizontal: 24,
        padding: 12,
        paddingHorizontal: 18,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#979797'
    },
    topButtonContainer: {
        padding: 12,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#121212'
    },
    buttonFilled: {
        margin: 24,
        backgroundColor: '#8687e7',
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 4,
    },
    button: {
        margin: 12,
        padding: 8,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1d1d1d'
    },
    buttonImage: {
        height: 24,
        width: 24
    },
    circleButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderColor: '#ffffffde',
        borderWidth: 2,
        marginLeft: 8,
        marginRight: 16
    },
    selectedButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#8687e7',
        borderWidth: 2,
        marginLeft: 8,
        marginRight: 16
    },
    taskTitle: {
        color: Colors.DEFAULT_TEXT_COLOR,
        fontSize: 20,
        width: 280,
        lineHeight: 48,
    },
    taskDescription: {
        color: Colors.DEFAULT_TEXT_COLOR_SECONDARY,
        fontSize: 18,
        width: 300,
    },
    taskTitleStyle: {
        color: Colors.DEFAULT_TEXT_COLOR,
        fontSize: 20,
        width: 280,
        lineHeight: 48,
    },
    taskDescriptionStyle: {
        color: Colors.DEFAULT_TEXT_COLOR_SECONDARY,
        fontSize: 18,
    },
    buttonTextStyle: {
        color: Colors.DEFAULT_TEXT_COLOR
    },
    taskAttributeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
        alignItems: 'center',
    }
})

export default EditTaskModal