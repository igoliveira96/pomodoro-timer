import {useEffect} from 'react';
import {useFonts} from 'expo-font';
import {Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import {AppRoutes} from './AppRoutes';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from './shared/themes/Theme';
import {StatusBar} from 'react-native';

SplashScreen.preventAutoHideAsync();

export function App() {

  const [loaded, error] = useFonts({
    InterRegular: Inter_400Regular,
    InterBold: Inter_700Bold,
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.colors.background }}>
      <StatusBar barStyle="light-content" />
      <AppRoutes/>
    </SafeAreaView>
  );
}
