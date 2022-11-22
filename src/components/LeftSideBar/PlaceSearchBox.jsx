import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { SearchKeyword } from "../recoil/SearchKeyword";


function PlaceSearchBox() {

  const [keyword, setKeyword] = useRecoilState(SearchKeyword);

  const search = () => {
    const searchKeyword = document.querySelector('#keyword').value;
    setKeyword(searchKeyword);
};


  return (
    <Wrapper>
      <SearchBox>
      <InputBox placeholder="여행지 입력" id="keyword"></InputBox>
      <SearchBox onClick={search}>
        <AiOutlineSearch />
        </SearchBox>
      </SearchBox>
    </Wrapper>
  );
}

export default PlaceSearchBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 6%;
  width: 100%;
  background-color: white;
  padding: 10px;
  align-items: center;
`;

const SearchBox = styled.div`
  display:flex;
  border: 1px solid rgb(89, 126, 85);
  width:100%;
  height : 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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