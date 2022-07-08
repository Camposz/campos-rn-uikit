import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

interface TextoProps {
    color?: string;
    weight?: 'normal' | 'bold';
    type?: 'tittle' | 'subtittle' | 'normal';
}

const TITTLE: string = RFPercentage(4).toString() + 'px';
const SUBTITTLE: string = RFPercentage(2.5).toString() + 'px';
const NORMAL: string = RFPercentage(2).toString() + 'px';

const Texto = styled.Text<TextoProps>`
    color: ${(props) => (props.color ? props.color : 'black')};
    font-family: 'WorkSans';
    font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
    font-size: ${(props) => (props.type ? (props.type == 'tittle' ? TITTLE : props.type == 'subtittle' ? SUBTITTLE : NORMAL) : NORMAL)};
`;

export { Texto, TextoProps };
