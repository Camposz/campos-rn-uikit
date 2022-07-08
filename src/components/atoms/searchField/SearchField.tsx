import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import PressableIcon from '../pressableIcon';

interface IProps {
    text: string;
    placeholder?: string;
    setValue: Dispatch<SetStateAction<string>>;
}

const SearchField: FunctionComponent<IProps> = ({ setValue, text }) => {
    let size: number = 18;

    return (
        <SearchBg>
            <IconGroup>
                <PressableIcon icon={'faSearch'} size={size} style={{ paddingLeft: 2.5 }} />
                <TextSearch placeholder="Search" onChangeText={setValue} value={text} selectionColor="#446BF2" />
            </IconGroup>
            {text != '' && <PressableIcon icon="faClose" onPress={() => setValue('')} style={{ paddingHorizontal: 10 }} />}
        </SearchBg>
    );
};

export default SearchField;

const SearchBg = styled.View`
    background-color: #76768025;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const IconGroup = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
`;

const TextSearch = styled.TextInput`
    margin-left: 10px;
    font-size: ${RFPercentage(2.5).toString() + 'px'};
    text-align: left;
    flex: 1;
    font-family: 'WorkSans';
`;
