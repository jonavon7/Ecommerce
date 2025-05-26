import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/presentation/screens/HomeScreen';
import ProductScreen from '@/presentation/screens/ProductScreen';
import CartScreen from '@/presentation/screens/CartScreen';
import { RouteName } from './RouteName';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from './types/RootStackParamList';
import { Logo } from '@/presentation/components/ReusableLogo';
import { Dimensions, View } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => {
    const logoHeight = Dimensions.get('window').width * 0.3;

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    header: () => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, height: logoHeight }}>
                            <Logo size="large" />
                        </View>
                    ),
                }}
                name={RouteName.Home}
                component={HomeScreen}
            />
            <Stack.Screen
                name={RouteName.Product}
                component={ProductScreen}
            />
        </Stack.Navigator>
    );
};

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title={RouteName.Shop} icon={<Icon name="shopping-bag" />} />
        <BottomNavigationTab title={RouteName.Cart} icon={<Icon name="shopping-cart" />} />
    </BottomNavigation>
);

const AppNavigator = () => {
    const { Navigator, Screen } = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Navigator
                tabBar={props => <BottomTabBar {...props} />}
                screenOptions={{
                    headerShown: false,
                }}>
                <Screen name={RouteName.Shop} component={HomeStack} />
                <Screen
                    options={{ headerShown: true }}
                    name={RouteName.Cart}
                    component={CartScreen}
                />
            </Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;