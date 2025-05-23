import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/presentation/screens/HomeScreen';
import ProductScreen from '@/presentation/screens/ProductScreen';
import CartScreen from '@/presentation/screens/CartScreen';
import { RouteName } from './RouteName';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}>
            <Stack.Screen name={RouteName.Home} component={HomeScreen} />
            <Stack.Screen name={RouteName.Product} component={ProductScreen} />
        </Stack.Navigator>
    );
}

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title={RouteName.Shop} icon={<Icon name='shopping-bag' />} />
        <BottomNavigationTab title={RouteName.Cart} icon={<Icon name='shopping-cart' />} />
    </BottomNavigation>
);

const AppNavigator = () => {
    const { Navigator, Screen } = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Navigator
                tabBar={props => <BottomTabBar {...props} />}
                screenOptions={{
                    headerShown: true,
                }}>
                <Screen name={RouteName.Shop} component={HomeStack} />
                <Screen name={RouteName.Cart} component={CartScreen} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;