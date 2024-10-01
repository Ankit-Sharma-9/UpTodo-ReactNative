import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { CountdownCircleTimer } from "react-native-countdown-circle-timer"
import { ScrollView } from "react-native-gesture-handler"
import ApplicationUsageCard from "../../components/FocusModeScreen/ApplicationUsageCard"
import { SelectList } from "react-native-dropdown-select-list"
import { BarChart } from "react-native-gifted-charts"


const FocusModeScreen = () => {
    const duration = 3600
    const [timerStarted,setTimerStarted] = useState(false);
    const [dropDown, setDropDown] = useState('');
  
    const OPTIONS = [
        { value: 'Today', key: '1' },
        { value: 'This Week', key: '2' },
        { value: 'This Month', key: '3' },
    ];
  
    const data = [
        {
            value: 2.5, 
            label: 'SUN', 
            barWidth: 32, 
            frontColor: '#A5A5A5', 
            barBorderRadius: 4, 
            labelTextStyle: {color: '#fff'}, 
            topLabelComponent: () => (<Text style={{color: '#fff', fontSize: 10}}>2h 30m</Text>)
        },
        {
            value: 3.5, 
            label: 'MON', 
            barWidth: 32, 
            frontColor: '#A5A5A5', 
            barBorderRadius: 4, 
            labelTextStyle: {color: '#fff'}, 
            topLabelComponent: () => (<Text style={{color: '#fff', fontSize: 10}}>3h 30m</Text>)
        },
        {
            value: 5, 
            label: 'TUE', 
            barWidth: 32, 
            frontColor: '#A5A5A5', 
            barBorderRadius: 4, 
            labelTextStyle: {color: '#fff'}, 
            topLabelComponent: () => (<Text style={{color: '#fff', fontSize: 10}}>5h</Text>)
        },
        {
            value: 3, 
            label: 'WED', 
            barWidth: 32, 
            frontColor: '#A5A5A5', 
            barBorderRadius: 4, 
            labelTextStyle: {color: '#fff'}, 
            topLabelComponent: () => (<Text style={{color: '#fff', fontSize: 10}}>3h</Text>)
        },
        {
            value: 4, 
            label: 'THU', 
            barWidth: 32, 
            frontColor: '#A5A5A5', 
            barBorderRadius: 4, 
            labelTextStyle: {color: '#fff'}, 
            topLabelComponent: () => (<Text style={{color: '#fff', fontSize: 10}}>4h</Text>)
        },
        {
            value: 4.5, 
            label: 'FRI', 
            barWidth: 32, 
            frontColor: '#8687E7', 
            barBorderRadius: 4, 
            labelTextStyle: {color: '#fff'}, 
            topLabelComponent: () => (<Text style={{color: '#fff', fontSize: 10}}>4h 30m</Text>)
        },
        {
            value: 2, 
            label: 'SAT', 
            barWidth: 32, 
            frontColor: '#A5A5A5', 
            barBorderRadius: 4, 
            labelTextStyle: {color: '#fff'}, 
            topLabelComponent: () => (<Text style={{color: '#fff', fontSize: 10}}>2h</Text>)
        },
      ];

    const toggleTimer = () => {
        setTimerStarted((timerStarted) => !timerStarted);
    }

    return (
        <ScrollView style={{flex: 1, backgroundColor:"#121212"}}>
            <View style={styles.container}>
                <Text style={styles.headerTextStyle}>Focus Mode</Text>
                
                <CountdownCircleTimer
                    isPlaying={timerStarted}
                    duration={duration}
                    colors={['#8687E7']}
                    isGrowing={true}
                    rotation="counterclockwise"
                    trailColor="#555"
                    size={220}
                >
                    {({ remainingTime }) => 
                        <Text 
                            style={{
                                color:'#ffffffde',
                                fontSize: 42,
                                lineHeight: 84
                            }}>
                                {parseInt(remainingTime/60)}:{remainingTime%60}{remainingTime%60 < 10 && '0'}
                        </Text>
                    }
                </CountdownCircleTimer>


                <View style={{width: '70%',gap: 24,paddingVertical: 24}}>
                    <Text style={styles.descriptionTextStyle}>
                        While your focus mode is on, all of your notifications will be off
                    </Text>
                    <Pressable
                        onPress={toggleTimer}
                        style={{
                            backgroundColor: '#8687E7',
                            borderRadius: 4,
                            paddingHorizontal: 24,
                            paddingVertical: 12,
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            width: '55%'
                        }}
                    >
                        <Text style={{color:'#ffffff',lineHeight: 24}}>{timerStarted ? 'Stop' : 'Start'} Focusing</Text>
                    </Pressable>
                </View>

                <View 
                    style={{
                        width: '86%',
                        flexDirection: 'row', 
                        justifyContent: 'space-between'
                    }}
                >
                    <Text 
                        style={styles.headerTextStyle}
                    >
                            Overview
                    </Text>
                    <View
                        style={{marginVertical: 24}}
                    >
                        <SelectList 
                            setSelected={val => setDropDown(val)}
                            data={OPTIONS}
                            save="value"
                            placeholder="This Week"
                            boxStyles={{borderColor: '#646464',backgroundColor:'#646464',borderRadius: 4}}
                            inputStyles={{color: '#fff'}}
                            search={false}
                            dropdownStyles={{backgroundColor: '#646464',color: '#fff',borderColor: '#646464',borderRadius: 4}}
                            dropdownItemStyles={{color: '#fff'}}
                        />
                    </View>
                </View>
                <View style={{left: -28}}>
                    <BarChart 
                        width={300} 
                        data={data} 
                        frontColor="#177AD5" 
                        spacing={10}
                        rulesType="solid"
                        hideRules={true}
                        maxValue={6}
                        showLine={false}
                        xAxisColor='#fff'
                        yAxisColor='#fff'
                        yAxisTextStyle={{color: '#fff'}}
                        barStyle={{marginBottom: 20}}
                        topLabelTextStyle={{color: "#fff"}}
                    />
                </View>

                <View>
                    <Text style={styles.headerTextStyle}>Applications</Text>
                    <View
                        style={styles.applicationUsageContainer}
                    >
                        <ApplicationUsageCard 
                            appIcon={require('../../assets/images/Icons/instagram.png')} 
                            appName='Instagram' 
                            usageTime='4h'/>
                        <ApplicationUsageCard 
                            appIcon={require('../../assets/images/Icons/twitter.png')} 
                            appName='Twitter' 
                            usageTime='3h'
                        />
                        <ApplicationUsageCard 
                            appIcon={require('../../assets/images/Icons/facebook.png')} 
                            appName='Facebook' 
                            usageTime='1h'
                        />
                        <ApplicationUsageCard 
                            appIcon={require('../../assets/images/Icons/telegram.png')} 
                            appName='Telegram' 
                            usageTime='30m'
                        />
                        <ApplicationUsageCard 
                            appIcon={require('../../assets/images/Icons/gmail.png')} 
                            appName='Gmail' 
                            usageTime='45m'
                        />
                    </View>
                    
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTextStyle:{
        alignSelf: 'start',
        color: '#ffffffde',
        fontSize: 24,
        lineHeight: 30,
        marginVertical: 32,
    },
    descriptionTextStyle: {
        color: '#ffffffde',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    applicationUsageContainer: {
        width: '100%',
        gap: 24,
        marginBottom: 64,
    }
})

export default FocusModeScreen