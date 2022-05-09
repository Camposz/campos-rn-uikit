import styled from 'styled-components/native';

interface BtnProps {
    background?: string;
}

const BtnView = styled.TouchableOpacity<BtnProps>`
    background-color: ${(props) => (props.background ? props.background : '#007AFF')};
    padding: 10px;
    border-radius: 10px;
`;

export { BtnView };
