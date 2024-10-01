import { createContext, useContext, useState } from "react";
import { useCurrentTaskContext } from "./CurrentTaskContext";
import { TASK_CATEGORY } from "../utils/taskCategoryUtils";

const UserTasksContext = createContext();

export const UserTasksProvider = ({ children }) => {
    const [tasks,setTasks] = useState([{title: "Do Math Homework",description: "Do HomeWork from 2 to 5",taskDate: '2024-09-30',taskHour: 16,taskMinute: 45,taskPriority: 1,taskCategory: 'Work',color: '#ff9680',image:  require('.././assets/images/Category/briefcase.png')}])
    const {title,description,taskDate,taskHour,taskMinute,taskPriority,taskCategory,color,image,resetCurrentTaskContext} = useCurrentTaskContext()

    const addTask = () => {
        setTasks((current) => [...current,{title,description,taskDate,taskHour,taskMinute,taskPriority,taskCategory,color,image}]);
        resetCurrentTaskContext();
        console.log(tasks)
    }

    const deleteTask = (id) => {

    }

    const updateTask = () => {

    }

    return (
        <UserTasksContext.Provider value={{tasks,addTask,deleteTask,updateTask}}>
            {children}
        </UserTasksContext.Provider>
    )
}

export const useUserTasksContext = () => useContext(UserTasksContext)