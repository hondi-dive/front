import React, { useState } from 'react';
import styled from 'styled-components';

const SearchPoint = ({onClick}) => {

  let [search, setSearch] = useState('')
  
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

    return (
      <SearchContainer>
        <SearchBar>
          <StyledButton className="SearchButton" onClick={onClick}>
            <img src="img/search-btn.png" alt="search" />
          </StyledButton>
          <StyledInput
            className="SearchInput"
            type="text"
            value={search}
            onChange={handleInputChange}
          />
      </SearchBar>
    </SearchContainer>
  )
}

export default SearchPoint;

export const SearchContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 60px;
  z-index: 9999;
  width: 300px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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