import { Product } from "@/models/Product";
import { Button, Layout, Popover, Text } from "@ui-kitten/components";
import { memo } from "react";
import { Image, StyleSheet } from "react-native";

interface ProductPopOverProps {
    product: Product
    visible: boolean;
    setVisible: (visible: boolean) => void;
    handleAddToCart: () => void;
}

const ProductPopOverComponent: React.FC<ProductPopOverProps> = ({
    product,
    visible,
    setVisible,
    handleAddToCart,
}) => {
    return (
        <Popover
            backdropStyle={styles.backdrop}
            visible={visible}
            anchor={() => (
                <Button onPress={handleAddToCart}>
                    Add to Cart
                </Button>
            )}
            onBackdropPress={() => setVisible(false)}
        >
            <Layout style={styles.popoverContainer}>
                <Text category="h6" style={styles.popoverTitle}>
                    Added to Cart!
                </Text>
                <Image
                    source={{ uri: product.image }}
                    style={styles.popoverImage}
                    resizeMode="cover"
                />
                <Text category="s1" style={styles.popoverProductName}>
                    {product.name}
                </Text>
                <Text category="s2" style={styles.popoverProductPrice}>
                    {product.price}
                </Text>
                <Button
                    style={styles.popoverButton}
                    onPress={() => {
                        setVisible(false);
                    }}
                >
                    Continue Shopping
                </Button>
            </Layout>
        </Popover>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    popoverContainer: {
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    popoverTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    popoverImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    popoverProductName: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    popoverProductPrice: {
        fontSize: 14,
        color: '#888',
        marginBottom: 15,
    },
    popoverButton: {
        marginTop: 10,
        width: '100%',
    },
});

export const ProductPopOver = memo(ProductPopOverComponent);