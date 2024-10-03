import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import Colors from "../../assets/Colors";
import CustomModal from "../CustomModal";
import CustomImageButton from "../TaskScreen/CustomImageButton";
import ProfileButton from "./ProfileButton";

const AppSettingsModal = ({visible,setModalVisible}) => {

    return (
        <CustomModal visible={visible}>
            <View style={styles.container}>
                <View style={{width: '90%',marginTop: 12,flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between'}}>  
                    <CustomImageButton imageIcon={require('../../assets/images/Icons/arrow-left.png')} onPressHandler={() => {setModalVisible(false)}}/>
                    <Text 
                    style={{
                        color: '#ffffffde',
                        fontSize: 24, 
                        lineHeight: 24,
                        textAlign: 'center',
                        letterSpacing: -0.5,
                        marginVertical: 24
                        }}>
                        Settings
                    </Text>
                    <CustomImageButton />
                </View>

                <View>
                    <Text
                        style={{marginVertical: 24,color:'#afafaf',fontSize:14,lineHeight:21}}
                    >
                        Settings
                    </Text>
                    <View style={{gap: 8, width: '100%'}}>
                        <ProfileButton 
                            buttonIcon={require('../../assets/images/Icons/brush.png')} 
                            buttonText='Change app color' 
                            
                        />
                        <ProfileButton 
                            buttonIcon={require('../../assets/images/Icons/text.png')} 
                            buttonText='Change app typography' 
                        />
                        <ProfileButton 
                            buttonIcon={require('../../assets/images/Icons/language-square.png')} 
                            buttonText='Change app language' 
                        />    
                    </View>
                </View>
                <View>
                    <Text
                        style={{marginVertical: 24,color:'#afafaf',fontSize:14,lineHeight:21}}
                    >Uptodo</Text>
                    <View style={{gap: 8, width: '100%'}}>
                        <ProfileButton
                            buttonIcon={require('../../assets/images/Icons/import.png')} 
                            buttonText='Import from Google calendar' 
                        />
                    </View>
                </View>
            </View>
        </CustomModal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 10,
        backgroundColor: '#121212',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
})

export default AppSettingsModal