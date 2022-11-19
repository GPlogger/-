import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 6%;
  width: 100%;
  background-color: white;
  padding: 10px;
`;

const SearchBox = styled.div`
  display:flex;
  border: 1px solid #1b5ac2;
  width:100%;
  height : 90%;
  justify-content: center;
`

const InputBox = styled.input`
  display:flex;
  font-size: 16px;
  height: 100%;
  padding: 10px;
  outline: none;
  float: left;
`

const SearchButton = styled.button`
  display:flex;
 border: 0px;  
 height: 100px; 
 background-color: #1b5ac2;
 outline: none;
 float: right;
 color: #ffffff;
`
function PlaceSearchBox() {
  return (
    <Wrapper>
      <SearchBox>
      <InputBox placeholder="검색어 입력"></InputBox>
      <SearchBox><AiOutlineSearch /></SearchBox>
      </SearchBox>
    </Wrapper>
  );
}

export default PlaceSearchBox;