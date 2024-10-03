import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ca } from "react-native-paper-dates";

const CustomCategoryButton = ({category,selectedCategory,setCategory,setColor,setImage}) => {
    const handleOnClick = () => {
        if(selectedCategory === category?.title) {
            setCategory('');
            setColor('');
            setImage('');
        }
        else {
            setCategory(category?.title);
            setColor(category?.color);
            setImage(category?.image);
        }
    }

    return (
        <Pressable style={[styles.container,{backgroundColor: `${category?.title === selectedCategory ? '#676767' : '#363636'}`}]} onPress={handleOnClick}>
            <View style={[styles.imageContainer,{backgroundColor: category?.color}]}>
                <Image source={category?.image}/>
            </View>
            <Text style={styles.text}>{category?.title}</Text>
        </Pressable>
    )
}

export default CustomCategoryButton;

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