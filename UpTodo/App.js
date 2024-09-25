import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnBoardingNavigator from './navigation/OnBoardingNavigator';

export default function App() {

  const [isShowSplash, setIsShowSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
    setIsShowSplash(false)
    },1000)
  },[])
  

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar style="dark" backgroundColor='#121212'/>
      <View style={styles.container}>
        {isShowSplash ? <SplashScreen /> : <OnBoardingNavigator />}
      </View>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
