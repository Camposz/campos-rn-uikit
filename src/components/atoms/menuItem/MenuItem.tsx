import React from 'react';
import { GestureResponderEvent } from 'react-native';
import SimpleIcon from '../simpleIcon';
import { Texto } from '../texts';
import { BtnProps, MenuItemView } from './styles';

interface MenuItemProps {
    text: string;
    icon: string;
    onPress?: (event: GestureResponderEvent) => void;
    listLayout?: BtnProps['listLayout'];
    background?: string;
    borderColor?: string;
    iconColor?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, icon, onPress, background, listLayout, borderColor, iconColor }) => {
    return (
        <MenuItemView onPress={onPress} background={background} listLayout={listLayout} borderColor={borderColor}>
            <Texto type="normal">{text}</Texto>
            <SimpleIcon icon={icon} color={iconColor ? iconColor : 'black'} />
        </MenuItemView>
    );
};

export default MenuItem;
