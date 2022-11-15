import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #bfe4ba;
  align-content: center;
  width: 20%;
`;

const Profile = styled.img`
    
`

function RightSideBar() {
  return (
    <Wrapper>
      <p>오른쪽 사이드 바</p>
    </Wrapper>
  );
}

export default RightSideBar;