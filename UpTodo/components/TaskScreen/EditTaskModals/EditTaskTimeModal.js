import DateTimePicker from "@react-native-community/datetimepicker"
import { useState } from "react";
import { convertDateToYYYYMMDD } from "../../../utils/utils";

const EditTaskTimeModal = ({setModalVisible,setDate,setHour,setMinute}) => {
    const [mode,setMode] = useState('date');
    
    const handleChange = (event,selectedDate) => {
        if(mode === 'date') {
            if(event.type === 'set') {
                setDate(convertDateToYYYYMMDD(selectedDate));
                setMode('time')
            }
            else if(event.type === 'dismissed'){
                setModalVisible(false);
            }
        }
        else if(mode === 'time') {
            if(event.type === 'set') {
                setHour(selectedDate.getHours());
                setMinute(selectedDate.getMinutes());
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

export default EditTaskTimeModal