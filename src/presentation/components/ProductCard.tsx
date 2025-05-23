import { Product } from '@/models/Product';
import { Button, Card, Text } from '@ui-kitten/components';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface ProductCardProps {
    product: Product
    onPress: () => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => (
    <Card style={styles.container}>
        <Image
            source={{
                uri: product.image,
            }}
            style={styles.image}
            resizeMode='cover'
        />
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
        <Button onPress={onPress}>
            View
        </Button>
    </Card>
);

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    image: {
        height: 200,
        width: '100%',
    }
});
