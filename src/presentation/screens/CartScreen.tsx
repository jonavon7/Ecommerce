import { useCartData } from '@/context/useCartData';
import { Layout, List, Text, Button, Card } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { EmptyComponent } from '../components/EmptyComponent';

const CartScreen: React.FC = () => {
    const { productList, setProductList } = useCartData();

    const handleRemoveItem = (id: string) => {
        setProductList(productList.filter((item) => item.id !== id));
    };

    const calculateTotal = () => {
        return productList.reduce((total, item) => {
            const price = parseFloat(item.price.replace('€', ''));
            return total + price;
        }, 0).toFixed(2);
    };

    const renderItem = ({ item }: { item: any }) => (
        <Card style={styles.card}>
            <View style={styles.cardContent}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.details}>
                    <Text category="h6">{item.name}</Text>
                    <Text category="s1" style={styles.price}>{item.price}</Text>
                </View>
                <Button
                    size="small"
                    status="danger"
                    onPress={() => handleRemoveItem(item.id)}
                >
                    Remove
                </Button>
            </View>
        </Card>
    );

    return (
        <Layout style={styles.container}>
            <List
                keyExtractor={(item) => item.id}
                data={productList}
                renderItem={renderItem}
                ListEmptyComponent={<EmptyComponent message="Your cart is empty." />}
                contentContainerStyle={styles.listContent}
                accessibilityLabel="Cart Product List"
            />
            {productList.length > 0 && (
                <View style={styles.totalContainer}>
                    <Text category="h6">Total: {calculateTotal()}€</Text>
                </View>
            )}
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 16,
    },
    listContent: {
        paddingBottom: 16,
    },
    card: {
        marginBottom: 16,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 16,
    },
    details: {
        flex: 1,
    },
    price: {
        marginTop: 4,
        color: '#888',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        color: '#888',
    },
    totalContainer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        alignItems: 'flex-end',
    },
});

export default CartScreen;
