import PetList from "./PetList";
import "./Employee.css";

/**
id: "KJ30Pcw",
firstName: "Leandro",
lastName: "Barada",
prefix: "",
postfix: "",
title: "Client Services Coordinator"
 */

export const Employee = (props) => {
  const {id, firstName, lastName, prefix, postfix, title} = props;
  //const {employee} = props.employee; //employee object
  console.log(props)

  return (
    <article className="employee">
      <h3>Staff Member Name</h3>
      {firstName} {lastName} 
      <h4>Staff Member Title</h4>
      <button>Show Pets</button>
      <PetList />
    </article>
  );
};

export default Employee;
