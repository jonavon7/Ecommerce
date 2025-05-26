import { products } from '@/data/products';
import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { Layout, List } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { RouteName } from '@/navigation/RouteName';
import { EmptyComponent } from '../components/EmptyComponent';

const HomeScreen = ({ navigation }) => {
    return (
        <Layout style={styles.container}>
            <List
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.contentContainer}
                data={products}
                renderItem={({ item }) => (
                    <ProductCard
                        product={item}
                        onPress={() => navigation.navigate(RouteName.Product, { product: item })}
                    />
                )}
                accessibilityLabel="Product List"
                ListEmptyComponent={<EmptyComponent message="No products available." />}
            />
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    contentContainer: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
});

export default HomeScreen;
