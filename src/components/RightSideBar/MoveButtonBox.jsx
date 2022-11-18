import React from "react";
import styled from "styled-components";

import { VscChevronUp, VscChromeClose, VscChevronDown} from "react-icons/vsc";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 35px;
    padding: 5px;
    background-color: yellow;
`;

const ButtonBox = styled.div`
display: flex;
flex-direction: column;
width: 5px;
height: 5px;
`;


function MoveButtonBox () {
    return (
        <Wrapper>
            <ButtonBox>
            <VscChevronUp></VscChevronUp>
            </ButtonBox>
            <ButtonBox></ButtonBox>
            <VscChromeClose></VscChromeClose>
            <VscChevronDown></VscChevronDown>
        </Wrapper>
    );
}
export default MoveButtonBox;