import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  width: 20rem;
`;

const Button = styled.button`
  padding: 10px;
  width: 6rem;
  margin-left: 10px;
  cursor: pointer;
  background-color: green;
  color: white;
  border-radius: 10px;
`;

const Search = ({ data, onEmployeeClick }) => {
  const [searchName, setSearchName] = useState("");

  const handleSearch = () => {
    setSearchName("");
  };

  const getEmployeeName = (e) => {
    setSearchName(e.target.value)
    onEmployeeClick(e.target.value);
  }

  return (
    <Box>
      <h1>Search your friends friend </h1>
      <div>
        <Input
          type="text"
          placeholder="Search Employee"
          value={searchName}
          onChange={getEmployeeName}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
    </Box>
  );
};

export default Search;
