import { Image, StyleSheet, Text, View } from "react-native"

const ApplicationUsageCard = ({appIcon,appName,usageTime}) => {
    return (
        <View
            style={styles.container}
        >
            <View style={{flexDirection: 'row',alignItems:'center'}}>
                <Image 
                    style={styles.appIcon}
                    source={appIcon}
                />
                <View>
                    <Text style={styles.appNameStyle}>{appName}</Text>
                    <Text style={styles.appDescriptionStyle}>You spent {usageTime} on {appName} today</Text>
                </View>
            </View>
            <View
                style={styles.infoIcon}
                >
                <Image 
                    resizeMode="cover"
                    style={{marginLeft: 8}}
                    source={require('../../assets/images/Icons/info-circle.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#646464',
        width: '86%',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        flexDirection: 'row'
    },
    appNameStyle: {
        fontSize: 16,
        color: '#ffffff'
    },
    appDescriptionStyle: {
        fontSize: 14,
        color: '#ffffff'
    },
    appIcon: {
        margin: 12,
        height: 32,
        width: 32,
    },
    infoIcon: {
        borderLeftColor: '#a8a8a8',
        borderLeftWidth: 2,
        height: 48,
        width: 48,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 12,
    }
})

export default ApplicationUsageCard