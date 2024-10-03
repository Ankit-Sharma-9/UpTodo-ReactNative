import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { useCurrentTaskContext } from "../../context/CurrentTaskContext";
import Colors from "../../assets/Colors";

const CategoryIcon = ({category,selectedIcon,selectIconHandler}) => {
    const handleOnClick = () => {
        if(selectedIcon === category.image) {
            selectIconHandler('');
        }
        else {
            selectIconHandler(category.image);
        }
    }

    return (
        <Pressable style={[styles.container,{backgroundColor: `${selectedIcon !== category.image ? category.color : '#000'}`}]} onPress={handleOnClick}>
            <View style={[styles.imageContainer,{backgroundColor:category.color}]}>
                <Image source={category.image}/>
            </View>
        </Pressable>
    )
}


export default CategoryIcon;

const styles = StyleSheet.create({
    container: {
        margin: 12,
        padding: 8,
        alignItems: 'center',
        borderRadius: 8,
        gap: 4,
    },
    imageContainer: {
        width: 64,
        height: 64,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        color: '#ffffffde'
    },
})