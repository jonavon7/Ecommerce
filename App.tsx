import AppNavigator from '@/navigation/AppNavigator';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import React from 'react';
import { default as theme } from '@/presentation/theme/custom-theme.json';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FeatherIconsPack } from '@/presentation/theme/utils/feather-icons';
import GlobalContextProvider from '@/context/GlobalContextProvider';

export default function App() {
  const colorScheme = useColorScheme();

  //TODO fix this
  console.log('System color scheme:', useColorScheme());

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <GlobalContextProvider>
          <IconRegistry icons={FeatherIconsPack} />
          <ApplicationProvider {...eva} theme={{
            ...(colorScheme === 'dark' ? eva.dark : eva.light),
            ...theme
          }}>
            <AppNavigator />
          </ApplicationProvider>
        </GlobalContextProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
