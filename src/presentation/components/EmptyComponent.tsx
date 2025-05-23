import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";

export const EmptyComponent = () => (
    <View style={styles.EmptyComponentContainer}>
        <Text style={styles.EmptyComponentText}>No products available.</Text>
    </View>
);

const styles = StyleSheet.create({
    EmptyComponentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    EmptyComponentText: {
        fontSize: 18,
        color: '#888',
    },
});