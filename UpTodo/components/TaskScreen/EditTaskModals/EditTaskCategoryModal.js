import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { TASK_CATEGORY_ARRAY } from "../../../utils/taskCategoryUtils";
import CustomModal from "../../CustomModal";
import { useState } from "react";
import CreateNewCategory from "../../CategoryScreen/CreateNewCategory";
import { ScrollView } from "react-native-gesture-handler";
import CategoryButton from "../../CategoryScreen/CategoryButton";
import CustomCategoryButton from "../../CategoryScreen/CustomCategoryButton";
// import CustomCategoryButton from "../../CategoryScreen/CustomCategoryButton";



const EditTaskCategoryModal = ({visible,setModalVisible,selectedCategory,setCategory,color,setColor,image,setImage}) => {

    const [taskCategory, setTaskCategory] = useState([...TASK_CATEGORY_ARRAY]);
    const [addCategoryModal, setAddCategoryModal] = useState(false);

    const saveCategory = () => {
        setModalVisible(false);
    }

    const handleCancel = () => {
        setModalVisible(false);
    }

    const handleEdit = () => {
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
                            {[...taskCategory].map((item,index) => (
                                <CustomCategoryButton key={index} selectedCategory={selectedCategory} category={item} color={color} image={image} setColor={setColor} setCategory={setCategory} setImage={setImage}/>
                            ))}
                            <Pressable style={styles.addNewCategoryContainer} onPress={() => {setAddCategoryModal(true)}}>
                                <View style={styles.addNewCategoryImageContainer}>
                                    <Image source={require('../../../assets/images/Category/add.png')}/>
                                </View>
                                <Text style={styles.addNewCategoryText}>Create New</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                    <View style={styles.buttonsContainer}>
                        <Pressable style={styles.button} onPress={handleCancel}>
                            <Text style={{color: '#8687e7',fontSize: 18, textAlign: 'center',}}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.buttonFilled} onPress={handleEdit}>
                            <Text style={{color: '#fff',fontSize: 18,textAlign: 'center',}}>Edit</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <CreateNewCategory visible={addCategoryModal} setModalVisible={setAddCategoryModal} addNewCategory={setTaskCategory}/>
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
        backgroundColor: '#363636', 
        justifyContent: 'space-between',
        alignItems: 'center',
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

export default EditTaskCategoryModal