import React from "react";
import styled from "styled-components";
import MoveButtonBox from "./MoveButtonBox";
import ScaduleInfo from "./ScaduleInfo";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 9%;
    margin: 9px 20px 0px;
    width: 270px;
    
    background-color: grey;
`;

function ScaduleBox () {
    return (
        <Wrapper>
            <MoveButtonBox></MoveButtonBox>
            <ScaduleInfo/>
        </Wrapper>
    );
}
export default ScaduleBox;