import React from 'react';
import { Title } from '../texts/Title';
import { BtnView } from './styles';
import { TittleProps } from '../texts/Title';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import { PressableIcon } from '../pressableIcon';

interface IProps {
    text: string;
    textColor?: TittleProps['color'];
    textWeigth?: TittleProps['weight'];
    background?: string;
    style?: StyleProp<ViewStyle>;
    icon?: string;
    carregando?: boolean;
}

const Btn: React.FC<IProps> = ({ background, text, textColor, textWeigth, style, icon, carregando }) => {
    return (
        <BtnView background={background} style={[style, { flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }]}>
            {!carregando ? (
                <>
                    {icon ? <PressableIcon icon={icon} color="white" size={25} /> : null}
                    <Title color={textColor ? textColor : 'white'} weight={textWeigth}>
                        {text}
                    </Title>
                </>
            ) : (
                <ActivityIndicator animating color={textColor ? textColor : 'white'} size={'large'} />
            )}
        </BtnView>
    );
};

export default Btn;
