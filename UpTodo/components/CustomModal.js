import { Modal } from "react-native"

const CustomModal = ({children,visible}) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            {children}
        </Modal>
    )
}

export default CustomModal