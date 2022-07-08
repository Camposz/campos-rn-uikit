import React from 'react';
import { Texto, TextoProps } from '../texts/Texto';
import { BtnView } from './styles';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SimpleIcon from '../simpleIcon';

interface IProps {
    text: string;
    textColor?: TextoProps['color'];
    textWeigth?: TextoProps['weight'];
    type?: TextoProps['type'];
    background?: string;
    style?: StyleProp<ViewStyle>;
    icon?: string;
    carregando?: boolean;
}

const Btn: React.FC<IProps> = ({ background, text, textColor, textWeigth, style, icon, carregando, type }) => {
    return (
        <BtnView background={background} style={[style, { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }]}>
            {!carregando ? (
                <>
                    {icon && <SimpleIcon style={{ marginRight: 10 }} icon={icon} color="white" size={RFPercentage(2.5)} />}
                    <Texto color={textColor ? textColor : 'white'} type={type}>
                        {text}
                    </Texto>
                </>
            ) : (
                <ActivityIndicator animating color={textColor ? textColor : 'white'} size={'large'} />
            )}
        </BtnView>
    );
};

export default Btn;
