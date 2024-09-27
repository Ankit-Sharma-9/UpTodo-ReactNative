import { StyleSheet, Text, View } from "react-native"

const HorizontalLine = ({text}) => {
    return (
        <View style={styles.horizontalLineContainer}>
            <View style={styles.horizontalLine} />
            <Text style={styles.horizontalLineText}>{text}</Text>
            <View style={styles.horizontalLine} />
        </View>
    )
}

const styles = StyleSheet.create({
    horizontalLineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    horizontalLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#979797',
    },
    horizontalLineText: {
        color: '#979797',
        marginHorizontal: 2,
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 17
    },
})

export default HorizontalLine