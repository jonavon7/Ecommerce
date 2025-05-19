import React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default function ProductScreen({ route }) {
    const { product } = route.params;

    return (
        <View style={{ padding: 20 }}>
            <Image source={product.image} style={{ width: '100%', height: 300 }} />
            <Text style={{ fontSize: 24, marginVertical: 10 }}>{product.name}</Text>
            <Text style={{ fontSize: 20, color: 'gray' }}>{product.price}</Text>
            <Button title="Add to Cart" containerStyle={{ marginTop: 20 }} />
        </View>
    );
}
