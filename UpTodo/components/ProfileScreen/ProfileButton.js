import { useState } from 'react'
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'

const ProfileButton = ({buttonText,buttonIcon,showRightIcon= true,isModal=false,setModalVisible,...textStyles}) => {
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
                <Image
                    source={buttonIcon}
                />
                <Text
                    style={{
                        color: '#ffffffde',
                        fontSize: 16,
                        lineHeight: 24,
                        fontWeight: '400',
                        ...textStyles
                    }}
                >
                    {buttonText}
                </Text>
            </View>
            {showRightIcon && <Image 
                source={require('../../assets/images/Icons/arrow-right.png')}
            />}
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
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
})

export default ProfileButton