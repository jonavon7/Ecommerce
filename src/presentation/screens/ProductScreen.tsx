import { useCartData } from '@/context/useCartData';
import { RouteName } from '@/navigation/RouteName';
import { RootStackParamList } from '@/navigation/types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ProductPopOver } from '../components/ProductPopOver';

type ProductScreenProps = NativeStackScreenProps<RootStackParamList, RouteName.Product>;

const ProductScreen: React.FC<ProductScreenProps> = ({ route }) => {
    const { product } = route.params;
    const { productList, setProductList } = useCartData();
    const [visible, setVisible] = useState(false);

    const handleAddToCart = () => {
        setProductList([...productList, product]);
        setVisible(true);
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
                <View>
                    <Text category='h5' style={styles.productName}>{product.name}</Text>
                    <Text category='s1' style={styles.productPrice}>{product.price}</Text>
                </View>
            </View>
            <ProductPopOver
                product={product}
                visible={visible}
                setVisible={setVisible}
                handleAddToCart={handleAddToCart}
            />
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
        marginBottom: 10,
    },
    productPrice: {
        marginBottom: 20,
    },
});

export default ProductScreen;
