import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import CustomModal from "../CustomModal";
import Colors from "../../assets/Colors";

const ChangeAccountImageModal = ({visible,setModalVisible}) => {
    return (
        <CustomModal visible={visible} >
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Text style={styles.headerText}>Change account Image</Text>
                    
                    <Text style={styles.textButton}>Take picture</Text>
                    <Text style={styles.textButton}>Import from gallery</Text>
                    <Text style={styles.textButton}>Import from Google Drive</Text>
                    
                    <Pressable onPress={() => setModalVisible(false)} style={styles.button}>
                        <Text style={{color: '#8687e7',fontSize: 18, textAlign: 'center',}}>Cancel</Text>
                    </Pressable>
                </View>
            </View>
        </CustomModal>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#00000067'
    },
    container: {
        width: '100%', 
        backgroundColor: '#363636',
        gap: 24,
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20,
        padding: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        backgroundColor: '#363636', 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonsLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer: {
        fontSize: 18,
        padding: 12,
        paddingHorizontal: 16,
        borderColor: '#979797',
        borderWidth: 1,
        width: '100%',
        borderRadius: 4,
        color: '#ffffffde'
    },
    headerText: {
        textAlign: 'center',
        alignSelf: 'center',
        color: '#fff',
        fontSize: 20,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1, 
        width: '90%',
        marginBottom: 12,
        paddingBottom: 16,
    },
    textButton:{
        color: Colors.DEFAULT_TEXT_COLOR_SECONDARY,
        fontSize: 16,
        width: '90%',
        marginHorizontal: 24,
        paddingVertical: 8,
    }
})

export default ChangeAccountImageModal