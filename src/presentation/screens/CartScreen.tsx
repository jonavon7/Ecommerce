import React from 'react';
import { View, Text } from 'react-native';

export default function CartScreen() {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18 }}>Your cart is empty.</Text>
        </View>
    );
}
