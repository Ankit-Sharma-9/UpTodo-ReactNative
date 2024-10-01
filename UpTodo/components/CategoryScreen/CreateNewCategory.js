import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import CustomModal from "../CustomModal";
import { categoryColors } from "../../utils/categoryUtils";


const CreateNewCategory = ({visible,setModalVisible}) => {
    const [newCategoryName,setNewCategoryName] = useState('')
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
                        <Pressable style={styles.addIconFromLibrary}>
                            <Text style={{color: '#fff'}}>Choose icon from library</Text>
                        </Pressable>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputText}>Category color:</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.selectCategoryColors}>
                                {categoryColors.map((item,index) => (<ColorCircle key={index} color={item}/>))}
                            </View>
                        </ScrollView>
                    </View>
                </View>

                

                <View style={styles.buttonsContainer}>
                    <Pressable onPress={() => {setModalVisible(false)}} style={styles.button}>
                        <Text style={{color: '#8687e7',fontSize: 18, textAlign: 'center',}}>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={() => {setModalVisible(false)}} style={styles.buttonFilled}>
                        <Text style={{color: '#fff',fontSize: 18,textAlign: 'center',}}>Create Category</Text>
                    </Pressable>
                </View>
            </View>
        </CustomModal>
    )
}

const ColorCircle = ({color,selectedColor}) => {
    const handleOnClick = () => {

    }

    return (
        <View style={{width: 36,height: 36,borderRadius: 18,backgroundColor: color}}>
            
        </View>
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