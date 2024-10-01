import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { useCurrentTaskContext } from "../../context/CurrentTaskContext";

const CategoryButton = ({category}) => {
    const { taskCategory, setImage, setColor,setTaskCategory } = useCurrentTaskContext();

    const handleOnClick = () => {
        if(taskCategory === category.title) {
            setTaskCategory({});
            setColor('');
            setImage('');
        }
        else {
            setTaskCategory(category.title);
            setColor(category.color);
            setImage(category.image);
        }
    }

    return (
        <Pressable style={[styles.container,{backgroundColor: `${taskCategory === category.title ? '#676767' : '#363636'}`}]} onPress={handleOnClick}>
            <View style={[styles.imageContainer,{backgroundColor:category.color}]}>
                <Image source={category.image}/>
            </View>
            <Text style={styles.text}>{category.title}</Text>
        </Pressable>
    )
}


export default CategoryButton;

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