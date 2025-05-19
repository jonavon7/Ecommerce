import { products } from '@/data/products';
import React from 'react';
import { FlatList } from 'react-native';
import { ProductCard } from '../components/ProductCard';

export default function HomeScreen({ navigation }) {
    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <ProductCard
                    product={item}
                    onPress={() => navigation.navigate('Product', { product: item })}
                />
            )}
        />
    );
}
