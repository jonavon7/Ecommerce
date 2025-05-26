import { Product } from '@/models/Product';
import { Button, Card, Text } from '@ui-kitten/components';
import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

interface ProductCardProps {
    product: Product
    onPress: () => void
}

const ProductCardComponent: React.FC<ProductCardProps> = ({ product, onPress }) => (
    <Card style={styles.container}>
        <Image
            source={{
                uri: product.image,
            }}
            style={styles.image}
            resizeMode='cover'
        />
        <Text category='s1'>{product.name}</Text>
        <Text category='s1' appearance='hint'>{product.price}</Text>
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

export const ProductCard = memo(ProductCardComponent);
