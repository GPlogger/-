import React from "react";
import styled from "styled-components";
import MoveButtonBox from "./MoveButtonBox";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    margin: 9px 12px 0px;
    background-color: grey;
`;

function ScaduleBox () {
    return (
        <Wrapper>
            <MoveButtonBox></MoveButtonBox>
        </Wrapper>
    );
}
export default ScaduleBox;