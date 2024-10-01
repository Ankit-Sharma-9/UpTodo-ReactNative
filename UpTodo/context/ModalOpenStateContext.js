import { createContext, useContext, useState } from "react";

const ModalOpenStateContext = createContext();

export const ModalStateProvider = ({ children }) => {
    const [calendarModalOpen,setCalendarModalOpen] = useState(false);
    const [timeModalOpen,settimeModalOpen] = useState(false);
    const [categoryModalOpen,setCategoryModalOpen] = useState(false);
    const [taskPriorityOpen,setTaskPriorityOpen] = useState(false);

    const toggleCalendarModalVisibilty = () => {
        setCalendarModalOpen((current) => !current);
    }
    
    const toggleCategoryModalVisibilty = () => {
        setCategoryModalOpen((current) => !current);
    }
    
    const toggleTimeModalVisibilty = () => {
        settimeModalOpen((current) => !current);
    }

    const togglePriorityModalVisibility = () => {
        setTaskPriorityOpen((current) => !current);
    }

    return (
        <ModalOpenStateContext.Provider value={{calendarModalOpen,timeModalOpen,categoryModalOpen,taskPriorityOpen,toggleCalendarModalVisibilty,toggleCategoryModalVisibilty,toggleTimeModalVisibilty,togglePriorityModalVisibility}}>
            {children}
        </ModalOpenStateContext.Provider>
    )
}

export const useModalStateContext = () => useContext(ModalOpenStateContext)