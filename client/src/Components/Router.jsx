import React, { useState, useEffect } from "react";
import Search from "./Search";
import EmployeeHierarchy from "./EmployeeHierarchy";
import "../App.css";

const Router = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error in fetching the data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleEmployeeClick = (employee) => {
    const employeeName = data.find(
        (emp) => emp.name.toLowerCase() === employee.toLowerCase()
      );
    setSelectedEmployee(employeeName);
  };

  return (
    <div>
      <Search data={data} onEmployeeClick={handleEmployeeClick} />
      <hr />
      {selectedEmployee ? (
        <div>
          <EmployeeHierarchy rootEmployee={selectedEmployee} data={data} />
        </div>
      ):<p style={{textAlign:'center'}}>Please Enter Valid Employee Name</p>}
    </div>
  );
};

export default Router;
