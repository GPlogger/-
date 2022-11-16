import React from "react";
import styled from "styled-components";
import { IoInformationSharp, IoAddOutline } from "react-icons/io5";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  /* padding: 10px; */
  margin: 9px 9px 0px;
`;

const PlaceList = styled.div`
  display: flex;
  flex-direction: row;
  height: 96px;
  width: 275px;
  background-color: #e8f0ee;
  align-content: center;
`;

const PlaceImg = styled.img`
  width: 90px;
  height: 90px;
`;

const PlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px;
  width: 165px;
  justify-content: space-between;
  background-color: #f8dada;
`;

const PlaceButtons = styled.div`
  width: 100%;
  height: 20%;
  text-align: right;

  background-color: #eeebce;

`
//"assets/img/TD/948.png"
//"성산일출봉"
//"#태그태그 #태그태그"
function PlaceTable(props) {
  return (
    <Wrapper>
        <PlaceList>
          <PlaceImg src={props.img} alt={props.name} />
          <PlaceInfo>
            <h4>{props.name}</h4>
            <h5>{props.tag}</h5>
            <h5>{props.tag}</h5>
          <PlaceButtons>
            <IoInformationSharp />
            <IoAddOutline />
          </PlaceButtons>
          </PlaceInfo>
        </PlaceList>
    </Wrapper>
  );
}

export default PlaceTable;