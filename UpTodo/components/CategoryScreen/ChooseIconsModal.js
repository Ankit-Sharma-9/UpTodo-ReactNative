import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomModal from "../CustomModal";
import CategoryIcon from "./CategoryIcon";
import { TASK_CATEGORY_IMAGE } from "../../utils/taskCategoryUtils";

const ChooseIconsModal = ({visible,setModalVisible,chooseIconHandler,selectedIcon}) => {
    const saveNewCategoryIcon = () => {
        setModalVisible(false);
    }
    return (
        <CustomModal visible={visible}>    
            <View style={styles.container}>
                <View style={{backgroundColor: '#363636',width: '90%',borderRadius: 8}}>
                    <View style={{height: 8}}/>
                    <Text style={styles.headerText}>Choose Icon</Text>
                    <ScrollView>
                        <View style={{flexWrap: 'wrap',flexDirection: 'row',justifyContent: 'center'}}>
                            {TASK_CATEGORY_IMAGE.map((item,index) => (
                                <CategoryIcon key={index} category={item} selectIconHandler={chooseIconHandler} selectedIcon={selectedIcon}/>
                            ))}
                        </View>
                    </ScrollView>
                    <View style={styles.buttonsContainer}>
                        <Pressable onPress={saveNewCategoryIcon} style={styles.buttonFilled}>
                            <Text style={{color: '#fff',fontSize: 18,textAlign: 'center',}}>Save</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
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
})

export default ChooseIconsModal