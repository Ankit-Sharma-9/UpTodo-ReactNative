import { Image, Pressable, StyleSheet, Text, View,ScrollView } from "react-native"
import CustomModal from "../CustomModal";
import { useCurrentTaskContext } from "../../context/CurrentTaskContext";
import { useState } from "react";
import { useUserTasksContext } from "../../context/UserTasksContext";
import Colors from "../../assets/Colors";



const EditTaskModal = ({visible,setModalVisible}) => {
    const {tasks,toggleTaskComplete} = useUserTasksContext()
    
    const ResetCurrentEditsAndGoback = () => {
        setModalVisible(false);
    }

    const ResetCurrentEdits = () => {

    }

    const EditTask = () => {
        setModalVisible(false);
    }

    
    const handleCheckTick = () => {
        // toggleTaskComplete(id);
    }  

    return (
        <CustomModal visible={visible}>
            <View style={styles.container}>
                <View style={{width: '100%',gap: 24}}>
                    <View style={styles.topButtonContainer}>
                        <Pressable style={styles.button} onPress={ResetCurrentEditsAndGoback}>
                            <Image style={styles.buttonImage} source={require('../../assets/images/Icons/cross.png')}/>
                        </Pressable>
                        <Pressable style={styles.button} onPress={ResetCurrentEdits}>
                            <Image style={styles.buttonImage} source={require('../../assets/images/Icons/repeat.png')}/>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row',alignItems: 'flex-start'}}>
                        <Pressable onPress={handleCheckTick} style={{height: 64,alignItems: 'center',justifyContent:'center',marginLeft: 24,}}>
                            <View style={true ? styles.selectedButton : styles.circleButton}/>
                        </Pressable>
                        <Pressable>
                            <View>
                                <Text style={styles.taskTitleStyle} numberOfLines={1} ellipsizeMode="tail">Task Title</Text>
                            </View>
                            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'}}>
                                <Text style={styles.taskDescriptionStyle}>Task Description</Text>
                            </View>
                        </Pressable>
                        <View style={{right: 34}}>
                            <Pressable style={styles.button} >
                                <Image style={styles.buttonImage} source={require('../../assets/images/Icons/edit.png')} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',marginVertical: 12,}}>
                        <View style={{flexDirection: 'row',marginLeft: 24,gap:12,}}>
                            <Image source={require('../../assets/images/Icons/timer-icon.png')}/>
                            <Text style={styles.taskDescriptionStyle}>Task Time: </Text>
                        </View>
                        <Pressable style={{padding: 12,marginRight: 24,backgroundColor: Colors.DEFAULT_BACKGROUND_SECONDARY,borderRadius:4}}>
                            <Text style={styles.buttonTextStyle}>Today at Time</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',marginVertical: 12,}}>
                        <View style={{flexDirection: 'row',marginLeft: 24,gap:12,}}>
                            <Image source={require('../../assets/images/Icons/tag-icon.png')}/>
                            <Text style={styles.taskDescriptionStyle}>Task Category: </Text>
                        </View>
                        <Pressable style={{padding: 12,marginRight: 24,backgroundColor: Colors.DEFAULT_BACKGROUND_SECONDARY,borderRadius:4,flexDirection:'row',alignItems:'center',gap:12}}>
                            <Image style={styles.buttonImage} source={require('../../assets/images/Category/design.png')}/>
                            <Text style={styles.buttonTextStyle}>category</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',marginVertical: 12,}}>
                        <View style={{flexDirection: 'row',marginLeft: 24,gap:12,}}>
                            <Image source={require('../../assets/images/Icons/flag-icon.png')}/>
                            <Text style={styles.taskDescriptionStyle}>Task Priority: </Text>
                        </View>
                        <Pressable style={{padding: 12,marginRight: 24,backgroundColor: Colors.DEFAULT_BACKGROUND_SECONDARY,borderRadius:4}}>
                            <Text style={styles.buttonTextStyle}>Default</Text>
                        </Pressable>
                    </View>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',marginVertical: 12,}}>
                        <View style={{flexDirection: 'row',marginLeft: 24,gap:12,}}>
                            <Image source={require('../../assets/images/Icons/hierarchy.png')}/>
                            <Text style={styles.taskDescriptionStyle}>Sub-Task: </Text>
                        </View>
                        <Pressable style={{padding: 12,marginRight: 24,backgroundColor: Colors.DEFAULT_BACKGROUND_SECONDARY,borderRadius:4}}>
                            <Text style={styles.buttonTextStyle}>Add Sub-Task</Text>
                        </Pressable>
                    </View>
                    <Pressable>
                        <View style={{flexDirection: 'row',marginLeft: 24,gap:12}}>
                            <Image source={require('../../assets/images/Icons/trash.png')}/>
                            <Text style={{fontSize: 18,color: '#FF4949'}}>Sub-Task: </Text>
                        </View>
                    </Pressable>
                </View>

                <Pressable  style={styles.buttonFilled} onPress={EditTask}>
                    <Text style={{color: '#fff',fontSize: 18,textAlign: 'center',}}>Edit Task</Text>
                </Pressable>
            </View>
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
    taskTitleStyle: {
        color: Colors.DEFAULT_TEXT_COLOR,
        fontSize: 20,
        width: 300,
        lineHeight: 48,
    },
    taskDescriptionStyle: {
        color: Colors.DEFAULT_TEXT_COLOR_SECONDARY,
        fontSize: 18,
    },
    buttonTextStyle: {
        color: Colors.DEFAULT_TEXT_COLOR
    }
})

export default EditTaskModal