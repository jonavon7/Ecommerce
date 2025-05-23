import { Button, Layout } from '@ui-kitten/components';
import React from 'react';
import { Image, Text, StyleSheet, View, Alert } from 'react-native';

export default function ProductScreen({ route }) {
    const { product } = route.params;

    if (!product) {
        return (
            <Layout style={styles.errorContainer}>
                <Text style={styles.errorText}>Product details are unavailable.</Text>
            </Layout>
        );
    }

    const handleAddToCart = () => {
        Alert.alert('Success', `${product.name} has been added to your cart.`);
    };

    return (
        <Layout style={styles.container}>
            <Image
                source={{ uri: product.image }}
                style={styles.image}
                resizeMode="cover"
                accessible
                accessibilityLabel={`Image of ${product.name}`}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
                <Button style={styles.button} onPress={handleAddToCart}>
                    Add to Cart
                </Button>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 20,
        color: '#888',
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});
