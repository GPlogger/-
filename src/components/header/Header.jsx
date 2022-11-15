import React from "react";
import styled from "styled-components";

// const 원하는이름 = styled.태그명
const Wrapper = styled.div`
  display: flex; // flex는 방향지정 필요
  flex-direction: row; // row : 가로   컬럼 : 세로
  width: 100%;
  height: 80px;
  background-color: grey;
  justify-content: center;
`;

const Logo = styled.img`
  width: 80px;
  margin: 10px;
`;

function Header() {
  return (
    <Wrapper>
      <Logo src="assets/img/logo3.png" alt="logo" />
    </Wrapper>
  );
}

export default Header;
