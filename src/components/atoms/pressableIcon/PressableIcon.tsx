import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as FreeIcons from '@fortawesome/free-solid-svg-icons';
import { Pressable, ViewStyle, StyleProp } from 'react-native';

interface IProps {
    icon: string;
    onPress?: any;
    color?: string;
    size?: number;
    style?: StyleProp<ViewStyle>;
}

const PressableIcon: FunctionComponent<IProps> = ({ icon, onPress, style, color, size }) => {
    return (
        <Pressable style={style} onPress={onPress}>
            <FontAwesomeIcon icon={FreeIcons[`${icon}`]} color={color ? color : '#3C3C4360'} size={size ? size : 18} />
        </Pressable>
    );
};

export default PressableIcon;
