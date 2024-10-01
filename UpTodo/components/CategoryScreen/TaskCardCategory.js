import { Image, StyleSheet, Text, View } from "react-native"

const TaskCardCategory = ({category,color,image}) => {
    
    return (
        <View style={[styles.container,{backgroundColor: color}]}>
            <Image style={styles.image} source={image}/>
            <Text style={styles.text}>{category}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 4,
        padding: 8,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    image: {
        width: 18,
        height: 18,
    },
    text: {
        color: '#fff',
        fontSize: 18,
    }
})

export default TaskCardCategory