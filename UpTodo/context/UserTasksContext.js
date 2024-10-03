import { createContext, useContext, useState } from "react";
import { useCurrentTaskContext } from "./CurrentTaskContext";
import { TASK_CATEGORY } from "../utils/taskCategoryUtils";
import { userTasks } from "../constants/userTaskConstants";

const UserTasksContext = createContext();

export const UserTasksProvider = ({ children }) => {
    const [tasks,setTasks] = useState([...userTasks]);
    const {title,description,taskDate,taskHour,taskMinute,taskPriority,taskCategory,color,image,resetCurrentTaskContext} = useCurrentTaskContext();

    const addTask = () => {
        setTasks((current) => [...current,{title,description,taskDate,taskHour,taskMinute,taskPriority,taskCategory,color,image,isCompleted:0,id:tasks.length+1}]);
        resetCurrentTaskContext();
        console.log(tasks)
    }

    const deleteTask = (id) => {

    }

    const updateTask = () => {

    }

    const toggleTaskComplete = (id) => {
        setTasks(prevTasks => prevTasks.map((task) => id === task.id ? {...task,isCompleted: task.isCompleted === 1 ? 0 : 1} : task));
    }

    return (
        <UserTasksContext.Provider value={{tasks,setTasks,addTask,deleteTask,updateTask,toggleTaskComplete}}>
            {children}
        </UserTasksContext.Provider>
    )
}

export const useUserTasksContext = () => useContext(UserTasksContext)