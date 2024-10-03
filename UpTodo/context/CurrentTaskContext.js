import { createContext, useContext, useState } from "react";

const CurrentTaskContext = createContext();

export const CurrentTaskProvider = ({ children }) => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [taskDate,setTaskDate] = useState('2024-09-17');
    const [taskHour,setTaskHour] = useState(12);
    const [taskMinute,setTaskMinute] = useState(30);
    const [taskPriority,setTaskPriority] = useState(1);
    const [taskCategory,setTaskCategory] = useState('');
    const [color,setColor] = useState('');
    const [image,setImage] = useState(null);

    const resetCurrentTaskContext = () => {
        setTitle('');
        setDescription('');
        setTaskDate('2024-09-17');
        setTaskHour(0);
        setTaskMinute(0);
        setTaskPriority(1);
        setTaskCategory('');
        setColor('');
        setImage(null);
    }

    return (
        <CurrentTaskContext.Provider value={{title,description,taskDate,taskHour,taskMinute,taskPriority,taskCategory,color,image,setImage,setColor,setTitle,setTaskCategory,setDescription,setTaskDate,setTaskHour,setTaskMinute,setTaskPriority,resetCurrentTaskContext}}>
            {children}
        </CurrentTaskContext.Provider>
    )
}

export const useCurrentTaskContext = () => useContext(CurrentTaskContext)