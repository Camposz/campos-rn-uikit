import { View, Text, ImageSourcePropType, ImageProps } from 'react-native';
import React, { FunctionComponent } from 'react';

interface CardProps extends ImageProps {
    source: ImageSourcePropType;
}

const Card: FunctionComponent<CardProps> = ({ source }) => {
    return (
        <>
            <Text>Card</Text>
        </>
    );
};

export default Card;
