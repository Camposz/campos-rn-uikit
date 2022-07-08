import styled from 'styled-components/native';

interface BtnProps {
    background?: string;
    borderColor?: string;
    listLayout?: { index: number; listSize: number };
}

const MenuItemView = styled.TouchableOpacity<BtnProps>`
    background-color: ${(props) => (props.background ? props.background : '#EDEDED')};
    padding: 11px;
    padding-left: 16px;
    padding-right: 16px;
    border-top-left-radius: ${(props) => (props.listLayout ? (props.listLayout.index == 0 ? '12px' : props.listLayout.index == props.listLayout.listSize - 1 ? '0px' : '0px') : '12px')};
    border-top-right-radius: ${(props) => (props.listLayout ? (props.listLayout.index == 0 ? '12px' : props.listLayout.index == props.listLayout.listSize - 1 ? '0px' : '0px') : '12px')};
    border-bottom-right-radius: ${(props) => (props.listLayout ? (props.listLayout.index == 0 ? '0px' : props.listLayout.index == props.listLayout.listSize - 1 ? '12px' : '0px') : '12px')};
    border-bottom-left-radius: ${(props) => (props.listLayout ? (props.listLayout.index == 0 ? '0px' : props.listLayout.index == props.listLayout.listSize - 1 ? '12px' : '0px') : '12px')};
    border-bottom-width: ${(props) => (props.listLayout ? (props.listLayout.index == props.listLayout.listSize - 1 ? '0px' : '0.5px') : '0px')};
    border-color: ${(props) => (props.borderColor ? props.borderColor : '#3C3C4336')};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export { MenuItemView, BtnProps };
