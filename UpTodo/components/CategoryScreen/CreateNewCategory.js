import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import CustomModal from "../CustomModal";
import { categoryColors } from "../../utils/categoryUtils";
import ChooseIconsModal from "./ChooseIconsModal";
import Colors from "../../assets/Colors";


const CreateNewCategory = ({visible,setModalVisible,addNewCategory}) => {
    const [newCategoryName,setNewCategoryName] = useState('');
    const [newCategoryColor,setNewCategoryColor] = useState('');
    const [newCategoryIcon,setNewCategoryIcon] = useState('');

    const [openNewIconSelectModal,setOpenNewIconSelectModal] = useState(false);

    const handleSelectColor = (color) => {
        setNewCategoryColor(color)
    }

    const handleAddNewCategory = () => {
        const newCategory = {
            title: newCategoryName,
            code: newCategoryName.toUpperCase(),
            image: newCategoryIcon,
            color: newCategoryColor,
        }
        addNewCategory((prev) => [...prev,newCategory]);
        setNewCategoryColor('');
        setNewCategoryIcon('');
        setNewCategoryName('');
        setModalVisible(false);
    }

    return (
        <CustomModal visible={visible}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.headerTitle}>Create new category</Text>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Category name:</Text>
                        <TextInput
                            style={styles.inputContainer}
                            placeholder="Category Name" 
                            onChangeText={setNewCategoryName} 
                            value={newCategoryName}
                            placeholderTextColor={'#afafaf'}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Category icon:</Text>
                        <View style={{alignItems: 'center', flexDirection: 'row'}}>
                            <Pressable style={styles.addIconFromLibrary} onPress={() => setOpenNewIconSelectModal(true)}>
                                <Text style={{color: '#fff'}}>Choose icon from library</Text>
                            </Pressable>
                            {newCategoryIcon !== '' && (
                                <View style={{width: 42,height: 42,borderRadius: 4,justifyContent:'center',alignItems:'center',backgroundColor: Colors.DEFAULT_BACKGROUND_SECONDARY}}>
                                    <Image source={newCategoryIcon} style={{width: 24,height: 24, borderRadius: 4}}/>
                                </View>
                            )}
                        </View>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Category color:</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.selectCategoryColors}>
                                {categoryColors.map((item,index) => (<ColorCircle key={index} color={item} selectedColor={newCategoryColor} handleColorSelect={handleSelectColor} />))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
                
                <View style={styles.buttonsContainer}>
                    <Pressable onPress={() => {setModalVisible(false)}} style={styles.button}>
                        <Text style={{color: '#8687e7',fontSize: 18, textAlign: 'center',}}>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={() => {handleAddNewCategory()}} style={styles.buttonFilled}>
                        <Text style={{color: '#fff',fontSize: 18,textAlign: 'center',}}>Create Category</Text>
                    </Pressable>
                </View>
            </View>
            <ChooseIconsModal visible={openNewIconSelectModal} setModalVisible={setOpenNewIconSelectModal} chooseIconHandler={setNewCategoryIcon} selectedIcon={newCategoryIcon}/>
        </CustomModal>
    )
}

const ColorCircle = ({color,selectedColor,handleColorSelect}) => {
    const handleOnClick = () => {
        handleColorSelect(color);
    }

    return (
        <Pressable style={{width: 36,height: 36,borderRadius: 18,backgroundColor: color, borderColor: selectedColor !== color ? color : '#fff', borderWidth: 2}} onPress={handleOnClick}/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 10,
        backgroundColor: '#121212',
        justifyContent: 'space-between'
    },
    inputWrapper: {
        marginBottom: 16,
    },
    headerTitle: {
        color: '#ffffffde',
        backgroundColor: '#121212',
        padding: 24,
        fontSize: 24,
    },
    inputText: {
        color: '#fff',
        marginHorizontal: 24,
        marginBottom: 12,
        fontSize: 18,
    },
    inputContainer: {
        color: '#fff',
        marginHorizontal: 24,
        padding: 12,
        paddingHorizontal: 18,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#979797'
    },
    buttonsContainer: {
        padding: 12,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#121212'
    },
    buttonFilled: {
        margin: 12,
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
    addIconFromLibrary: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: '#979797',
        marginHorizontal: 24,
        borderRadius: 4,
        width: 200,
    },
    selectCategoryColors: {
        gap: 12,
        flexDirection: 'row',
        marginLeft: 24,
    }
})

export default CreateNewCategory;