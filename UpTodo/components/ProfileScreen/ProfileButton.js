import { useState } from 'react'
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import Colors from '../../assets/Colors';

const ProfileButton = ({buttonText,buttonIcon,isModal=false,setModalVisible,...textStyles}) => {
    const handleOnPress = () => {
        if(isModal)
            setModalVisible(true);
    }

    return (
        <Pressable
            style={styles.container}
            onPress={handleOnPress}
        >
            <View style={{flexDirection: 'row',gap:12}}>
                <Image source={buttonIcon} />
                <Text style={[styles.buttonText,{...textStyles}]}>
                    {buttonText}
                </Text>
            </View>
            <Image source={require('../../assets/images/Icons/arrow-right.png')} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '86%',
        height: 48,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    buttonText: {
        color: Colors.DEFAULT_TEXT_COLOR,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
    }
})

export default ProfileButton