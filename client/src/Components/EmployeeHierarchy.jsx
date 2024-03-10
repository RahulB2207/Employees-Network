import EmployeeNode from "./EmployeeNode.jsx";

const EmployeeHierarchy = ({ rootEmployee, data }) => {
  return (
    <div>
       <EmployeeNode employee={rootEmployee} data={data} />
    </div>
  );
};

export default EmployeeHierarchy;
