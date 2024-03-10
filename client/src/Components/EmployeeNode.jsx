import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Button = styled.button`
  padding: 5px 10px;
  width: 20rem;
  background-color: ${({ isExpanded }) => (isExpanded ? "#D9FEE5" : "white")};
  border: 3px solid green;
  margin: 10px;
  cursor: pointer;
  border-radius: 20px;
  line-height: 0.1rem;
`;

const Container = styled.div`
  display: inline-block;
  border-left: 1px solid green;
  margin-left: 10px;
`;

const ProfileIcon = styled(AccountCircleIcon)`
  width: 2rem;
  border-radius: 50%;
  font-size: 2rem;
  margin-top: 0.5rem;
  color: green;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Occupation = styled.p`
  display: flex;
  color: #808080;
  margin-left: 2.4rem;
  margin-top: 0.5rem;
`;

const EmployeeNode = ({ employee, data, selectedEmployee, onEmployeeClick }) => {
  const [isExpanded, setIsExpanded] = useState(employee.isRoot || false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const isVisible = !selectedEmployee || selectedEmployee.friends.includes(employee.id);

  return isVisible ? (
    <div>
      {employee.friends.length > 0 && (
        <span
          style={{ marginRight: "5px", cursor: "pointer" }}
          onClick={handleToggle}
        >
          {"▶"}
        </span>
      )}
      <Button
        onClick={() => {
          handleToggle();
          if (onEmployeeClick) {
            onEmployeeClick(employee);
          }
        }}
        isExpanded={isExpanded}
      >
        <span style={{ display: "flex", alignItems: "center" }}>
          <ProfileIcon />
          <p style={{ marginLeft: "1.5rem", fontSize: "1rem" }}>
            {employee.name}
          </p>
        </span>
        <Occupation>{employee.occupation}</Occupation>
      </Button>
      <span style={{ border: "3px solid green", padding: "10px" }}>
        {employee.friends.length}
      </span>
      {employee.friends.length > 0 && (
        <span
          style={{ marginLeft: "7px", cursor: "pointer" }}
          onClick={handleToggle}
        >
          {isExpanded ? "▼" : "▶"}
        </span>
      )}
      {isExpanded && (
        <Container>
          <InnerContainer>
            {employee.friends.map((friendId) => (
              <div key={friendId} style={{ display: "inline-block" }}>
                <EmployeeNode
                  employee={data?.find((emp) => emp.id === friendId)}
                  data={data}
                  selectedEmployee={selectedEmployee}
                  onEmployeeClick={onEmployeeClick}
                />
              </div>
            ))}
          </InnerContainer>
        </Container>
      )}
    </div>
  ) : null;
};

export default EmployeeNode;
