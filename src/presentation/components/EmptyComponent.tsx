import { Text } from "@ui-kitten/components";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

interface EmptyComponentProps {
    message: string;
}

const EmptyComponent_: React.FC<EmptyComponentProps> = ({ message }) => (
    <View style={styles.EmptyComponentContainer}>
        <Text category="s1" appearance='hint'>{message}</Text>
    </View>
);

const styles = StyleSheet.create({
    EmptyComponentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export const EmptyComponent = memo(EmptyComponent_);
