import { Pressable, StyleSheet, Text, View } from "react-native"
import { Calendar } from "react-native-calendars";
import { useCurrentTaskContext } from "../context/CurrentTaskContext";
import { useModalStateContext } from "../context/ModalOpenStateContext";
import CustomModal from "./CustomModal";

const AddDateCalendarModal = ({visible,setModalVisible}) => {
    const {taskDate,setTaskDate} = useCurrentTaskContext();

    const cancelChosenTime = () => {
        setTaskDate('');
        setModalVisible(false);
    }

    const moveToAddTimeModal = () => {
        setModalVisible(false);
    }

    return (
        <CustomModal visible={visible}>
            <View style={styles.container}>
                <View style={{backgroundColor: '#363636',width: '90%',borderRadius: 8}}>
                    <View style={{height: 8}}/>
                    <Calendar
                        onDayPress={day => {
                            setTaskDate(day.dateString);
                        }}
                        theme={{
                            monthTextColor: '#fff',
                            backgroundColor: '#363636',
                            calendarBackground: '#363636',
                            textSectionTitleColor: '#fff',
                            selectedDayBackgroundColor: '#272727',
                            selectedDayTextColor: '#fff',
                            todayTextColor: '#8687e7',
                            dayTextColor: '#fff',
                            textDisabledColor: '#141414'
                        }}
                    />
                    <View style={styles.buttonsContainer}>
                        <Pressable onPress={cancelChosenTime} style={styles.button}>
                            <Text style={{color: '#8687e7',fontSize: 18, textAlign: 'center',}}>Cancel</Text>
                        </Pressable>
                        <Pressable onPress={moveToAddTimeModal} style={taskDate !== '' ? styles.buttonFilled : styles.buttonDisabled} disabled={taskDate === ''}>
                            <Text style={{color: '#fff',fontSize: 18,textAlign: 'center',}}>Choose Time</Text>
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
    buttonDisabled: {
        margin: 12,
        width: 150,
        backgroundColor: '#8687e766',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 4,
    }
})

export default AddDateCalendarModal