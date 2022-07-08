import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import PressableIcon from '../pressableIcon';

interface IProps {
    placeholder?: string;
    text: string;
    setValue: Dispatch<SetStateAction<string>>;
}

const TextField: FunctionComponent<IProps> = ({ setValue, text, placeholder }) => {
    return (
        <SearchBg>
            <IconGroup>
                <TextSearch placeholder={placeholder ? placeholder : 'Write something...'} onChangeText={setValue} value={text} selectionColor="#446BF2" />
            </IconGroup>
            <PressableIcon icon="faClose" onPress={() => setValue('')} style={{ paddingHorizontal: 5 }} size={18} />
        </SearchBg>
    );
};

export default TextField;

const SearchBg = styled.View`
    padding-bottom: 5px;
    border-bottom-width: 0.5px;
    border-bottom-color: #c6c6c8;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const IconGroup = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 0.95;
`;

const TextSearch = styled.TextInput`
    margin-left: 10px;
    font-size: ${RFPercentage(2.5).toString() + 'px'};
    text-align: left;
    flex: 1;
    font-family: 'WorkSans';
`;
