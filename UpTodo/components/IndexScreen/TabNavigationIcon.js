import { Image, Text, View } from "react-native"

const TabNavigationIcon = ({focused,title,activeIcon,inactiveIcon,iconStyle,textStyle}) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center',paddingTop: 12, gap: 6}}>
            <Image 
                style={{...iconStyle}}
                source={focused ? activeIcon : inactiveIcon}
            />
            <Text style={{color: '#ffffffde',fontSize: 12,fontWeight: '400',...textStyle}}>{title}</Text>
        </View>
    )
}

export default TabNavigationIcon