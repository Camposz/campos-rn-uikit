import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as FreeIcons from '@fortawesome/free-solid-svg-icons';
import { StyleProp, ViewStyle } from 'react-native';

interface IProps {
    icon: string;
    color?: string;
    size?: number;
    style?: StyleProp<ViewStyle>;
}

const SimpleIcon: FunctionComponent<IProps> = ({ icon, color, size, style }) => {
    return <FontAwesomeIcon style={style} icon={FreeIcons[`${icon}`]} color={color ? color : '#3C3C4360'} size={size ? size : 18} />;
};

export default SimpleIcon;
