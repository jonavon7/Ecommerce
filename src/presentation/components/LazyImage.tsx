import { Spinner } from '@ui-kitten/components';
import React, { memo, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface LazyImageProps {
    uri: string;
}

const LazyImageComponent: React.FC<LazyImageProps> = ({ uri }) => {
    const [loading, setLoading] = useState(true);

    return (
        <View style={styles.container}>
            {loading && (
                <View style={styles.spinnerContainer}>
                    <Spinner size="large" status="primary" />
                </View>
            )}
            <Image
                source={{ uri }}
                style={styles.image}
                resizeMode="cover"
                onLoadEnd={() => setLoading(false)} // Hide spinner when image is loaded
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    spinnerContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -15 }, { translateY: -15 }], // Center the spinner
    },
});

export const LazyImage = memo(LazyImageComponent);
