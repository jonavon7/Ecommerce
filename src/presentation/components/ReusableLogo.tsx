import React, { memo } from 'react';
import { Image, View, Dimensions } from 'react-native';

type LogoSize = 'small' | 'medium' | 'large';

interface LogoProps {
    size: LogoSize;
}

const LogoComponent: React.FC<LogoProps> = ({ size }) => {
    const screenWidth = Dimensions.get('window').width;

    const getSize = () => {
        switch (size) {
            case 'small':
                return screenWidth * 0.1; // 10% of screen width
            case 'medium':
                return screenWidth * 0.2; // 20% of screen width
            case 'large':
                return screenWidth * 0.3; // 30% of screen width
            default:
                return screenWidth * 0.2; // Default to medium size
        }
    };

    return (
        <View>
            <Image
                source={require('@/presentation/assets/logo.png')}
                style={{
                    width: getSize(),
                    height: getSize(),
                }}
                resizeMode='contain'
            />
        </View>
    );
};

export const Logo = memo(LogoComponent);