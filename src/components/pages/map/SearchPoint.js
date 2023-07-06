import React, { useState } from 'react';
import styled from 'styled-components';
import {IoSearch} from 'react-icons/io5';

const SearchPoint = ({onClick}) => {

  let [search, setSearch] = useState('')
  
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

    return (
      <SearchMainContainer>
      <SearchContainer>
        <SearchBar>
          <StyledButton>
            <IoSearch
              className="icon"
              size="23"
              color="#327AEB"
              cursor="pointer"
              
            />
          </StyledButton>
          <StyledInput
            className="SearchInput"
            type="text"
            value={search}
            placeholder='장소 검색하기'
            padding-left='10px'
            onChange={handleInputChange}
          />
      </SearchBar>
    </SearchContainer>
    </SearchMainContainer>
  )
}

export default SearchPoint;

export const SearchContainer = styled.div`
  position: absolute;
  top: 30px;
  // left: 60px;
  z-index: 9999;
  width: 320px;
  height: 45px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  align-items: center;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: space-around;
`;

export const StyledInput = styled.input`
  font-size: 18px;
  color: rgb(63, 63, 63);
  width: 90%;
  /* padding: 10px; */
  border: 0px;
  outline: none;
  /* float: left; */
  z-index: 5000;
  padding-top: 3px;
  background-color: transparent;
  text-align: start;
`;




const StyledButton = styled.button`
  text-decoration: none;
  color: black;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  text-align: start;
  cursor: pointer;
`;

export const SearchMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  text-align: center;
`;
