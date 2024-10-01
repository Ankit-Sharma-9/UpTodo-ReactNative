import { Pressable, StyleSheet, Text, View } from "react-native"
import { useModalStateContext } from "../context/ModalOpenStateContext"
import DateTimePicker from "@react-native-community/datetimepicker"
import { useCurrentTaskContext } from "../context/CurrentTaskContext"
import CustomModal from "./CustomModal"
import { useState } from "react"


const AddTimeModal = ({visible,setModalVisible}) => {
    const { toggleCalendarModalVisibilty } = useModalStateContext()
    const { setTaskHour, setTaskDate, setTaskMinute } = useCurrentTaskContext()
    const [date,setDate] = useState(new Date());

    const handleChange = (event,time) => {
        setModalVisible(false)
    } 

    return (
        <CustomModal visible={visible}>    
            <DateTimePicker
                value={new Date()}
                mode='datetime'
                display="default"
                onChange={handleChange}
            />
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

export default AddTimeModal