import React from 'react';
import { Card, Text, Button } from 'react-native-elements';

export const ProductCard = ({ product, onPress }) => (
    <Card>
        <Card.Image source={product.image} style={{ height: 200 }} />
        <Card.Divider />
        <Text style={{ fontWeight: 'bold' }}>{product.name}</Text>
        <Text style={{ marginBottom: 10 }}>{product.price}</Text>
        <Button title="View" onPress={onPress} />
    </Card>
);
