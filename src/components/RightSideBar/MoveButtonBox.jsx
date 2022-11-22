import React from "react";
import styled from "styled-components";

import { VscChevronUp, VscChromeClose, VscChevronDown} from "react-icons/vsc";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 35px;
    background-color: yellow;
    justify-content : center;
    align-items: center;
`;



function MoveButtonBox () {
    return (
        <Wrapper>
            <VscChevronUp />
            <VscChromeClose />
            <VscChevronDown />
        </Wrapper>
    );
}
export default MoveButtonBox;