import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';
import { UserAuthProvider } from './context/UserAuthContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CurrentTaskProvider } from './context/CurrentTaskContext';
import { UserTasksProvider } from './context/UserTasksContext';
import { ModalStateProvider } from './context/ModalOpenStateContext';

export default function App() {

  const [isShowSplash, setIsShowSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
    setIsShowSplash(false)
    },1000)
  },[])
  

  return (
    <UserAuthProvider>
      <ModalStateProvider>
        <CurrentTaskProvider>
          <UserTasksProvider>
            <GestureHandlerRootView style={{flex:1}}>
              <SafeAreaView style={{flex:1}}>
                <StatusBar style="light" backgroundColor='#121212'/>
                  <KeyboardAvoidingView style={styles.container}>
                    {isShowSplash ? <SplashScreen /> : <AppNavigator />}
                  </KeyboardAvoidingView>  
              </SafeAreaView>
            </GestureHandlerRootView>
          </UserTasksProvider>
        </CurrentTaskProvider>
      </ModalStateProvider>
    </UserAuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
