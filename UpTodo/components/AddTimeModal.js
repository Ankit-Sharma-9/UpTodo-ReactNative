import DateTimePicker from "@react-native-community/datetimepicker"
import { useCurrentTaskContext } from "../context/CurrentTaskContext"

import { useState } from "react"
import { convertDateToYYYYMMDD } from "../utils/utils"


const AddTimeModal = ({setModalVisible}) => {
    const [mode,setMode] = useState('date');

    const { setTaskDate, setTaskHour, setTaskMinute } = useCurrentTaskContext();

    const handleChange = (event,selectedDate) => {
        if(mode === 'date') {
            if(event.type === 'set') {
                setTaskDate(convertDateToYYYYMMDD(selectedDate));
                setMode('time')
            }
            else if(event.type === 'dismissed'){
                setModalVisible(false);
            }
        }
        else if(mode === 'time') {
            if(event.type === 'set') {
                setTaskHour(selectedDate.getHours());
                setTaskMinute(selectedDate.getMinutes());
                setModalVisible(false);
            }
            else if(event.type === 'dismissed'){
                setMode('date');
            }
        }
    } 

    return (
        <>
            <DateTimePicker
                value={new Date()}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={handleChange}
            />
        </>
        
    )
}

export default AddTimeModal