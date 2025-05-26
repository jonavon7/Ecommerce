import { Product } from '@/models/Product';
import { Button, Card, Text } from '@ui-kitten/components';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { LazyImage } from './LazyImage';

interface ProductCardProps {
    product: Product;
    onPress: () => void;
}

const ProductCardComponent: React.FC<ProductCardProps> = ({ product, onPress }) => (
    <Card style={styles.container} onPress={onPress}>
        <LazyImage uri={product.image} />
        <View style={styles.details}>
            <Text category="h6" style={styles.productName}>
                {product.name}
            </Text>
            <Text category="s1" appearance="hint" style={styles.productPrice}>
                {product.price}
            </Text>
            <Text category="p2" style={styles.productDescription} numberOfLines={2}>
                {product.description}
            </Text>
        </View>
        <Button style={styles.button} onPress={onPress}>
            View Details
        </Button>
    </Card>
);

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    details: {
        padding: 10,
    },
    productName: {
        // fontWeight: 'bold',
        marginBottom: 5,
    },
    productPrice: {
        color: '#888',
        marginBottom: 10,
    },
    productDescription: {
        color: '#666',
        marginBottom: 15,
    },
    button: {
        marginHorizontal: 10,
        marginBottom: 10,
    },
});

export const ProductCard = memo(ProductCardComponent);
