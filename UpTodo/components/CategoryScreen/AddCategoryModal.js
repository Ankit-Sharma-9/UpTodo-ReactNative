import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import TaskPriorityButton from "../TaskPriorityButton";
import CategoryButton from "./CategoryButton";
import { TASK_CATEGORY, TASK_CATEGORY_ARRAY } from "../../utils/taskCategoryUtils";
import CustomModal from "../CustomModal";
import { useCurrentTaskContext } from "../../context/CurrentTaskContext";
import { useState } from "react";
import CreateNewCategory from "./CreateNewCategory";
import { ScrollView } from "react-native-gesture-handler";



const AddCategoryModal = ({visible,setModalVisible}) => {

    const [addCategoryModal, setAddCategoryModal] = useState(false);

    const saveCategory = () => {
        setModalVisible(false);
    }

    return (
        <CustomModal visible={visible}>    
            <View style={styles.container}>
                    <View style={{backgroundColor: '#363636',width: '90%',borderRadius: 8}}>
                        <View style={{height: 8}}/>
                        <Text style={styles.headerText}>Choose Category</Text>
                <ScrollView>
                        <View style={{flexWrap: 'wrap',flexDirection: 'row',justifyContent: 'center'}}>
                            {TASK_CATEGORY_ARRAY.map((item,index) => (
                                <CategoryButton key={index} category={item}/>
                            ))}
                            <Pressable style={styles.addNewCategoryContainer} onPress={() => {setAddCategoryModal(true)}}>
                                <View style={styles.addNewCategoryImageContainer}>
                                    <Image source={require('../../assets/images/Category/add.png')}/>
                                </View>
                                <Text style={styles.addNewCategoryText}>Create New</Text>
                            </Pressable>
                        </View>
                </ScrollView>
                        <View style={styles.buttonsContainer}>
                            <Pressable onPress={saveCategory} style={styles.buttonFilled}>
                                <Text style={{color: '#fff',fontSize: 18,textAlign: 'center',}}>Save</Text>
                            </Pressable>
                        </View>
                    </View>
            </View>
            <CreateNewCategory visible={addCategoryModal} setModalVisible={setAddCategoryModal}/>
        </CustomModal>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 100,
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
        paddingVertical: 8,
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
        width: '93%',
        backgroundColor: '#8687e7',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 4,
    },
    addNewCategoryContainer: {
        margin: 12,
        padding: 8,
        alignItems: 'center',
        borderRadius: 8,
        gap: 4,
    },
    addNewCategoryImageContainer: {
        backgroundColor: '#80ffd1',
        width: 64,
        height: 64,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addNewCategoryText: {
        fontSize: 16,
        color: '#ffffffde'
    },
})

export default AddCategoryModal