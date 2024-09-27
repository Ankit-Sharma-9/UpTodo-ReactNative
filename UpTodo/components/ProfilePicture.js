import { Image, StyleSheet, View } from "react-native"

const ProfilePicture = ({height,width,image}) => {
    return (
        <View style={{height: height, width: width}}>
            <Image resizeMode="cover" style={{height: height, width: width, borderRadius: height/2}} source={image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    }
})

export default ProfilePicture