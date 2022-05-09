import styled from 'styled-components/native';

interface TittleProps {
    color?: string;
    weight?: 'normal' | 'bold';
}

const Title = styled.Text<TittleProps>`
    color: ${(props) => (props.color ? props.color : 'black')};
    font-family: 'WorkSans';
    font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
    font-size: 25px;
`;

export { Title, TittleProps };
