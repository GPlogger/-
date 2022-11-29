import React from "react";
import styled from "styled-components";
import MoveButtonBox from "./MoveButtonBox";
import ScheduleInfo from "./ScheduleInfo";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 9%;
    margin: 9px 20px 0px;
    width: 270px;
    
    background-color: grey;
`;

function ScheduleBox () {
    return (
        <Wrapper>
            <MoveButtonBox></MoveButtonBox>
            <ScheduleInfo/>
        </Wrapper>
    );
}
export default ScheduleBox;