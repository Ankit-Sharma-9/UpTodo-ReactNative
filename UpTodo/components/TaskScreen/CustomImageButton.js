import React from 'react'
import { Image, Pressable } from 'react-native'

const CustomImageButton = ({imageIcon,onPressHandler}) => {

    const buttonPressHandler = () => {
        onPressHandler();
    }

    return (
        <Pressable onPress={buttonPressHandler} style={{padding: 12,width: 48}}>
            <Image style={{height: 24, width:24}} source={imageIcon}/>
        </Pressable>
    )
}

export default CustomImageButton