import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

//serene-tundra-77911.herokuapp.com/api/employees

class EmployeeList extends React.Component {
  
  constructor(){
    super();
    this.state = {
      employees : []
    }
  }

  componentDidMount(){
    let employees = this.getEmployees();
    this.setState({
      employees : employees
    })
    //console.log(employees);
  }

  getEmployees(){
    return [
      {
      id: "z7GIN_i",
      firstName: "Leah",
      lastName: "Ayers",
      prefix: "Dr.",
      postfix: "",
      title: "Medical Director"
      },
      {
      id: "vlJtFOU",
      firstName: "Jovanni",
      lastName: "Hernandez",
      prefix: "Dr.",
      postfix: "",
      title: "Associate Veterinarian"
      },
      {
      id: "t3qV6bu",
      firstName: "Susan",
      lastName: "Gallegos",
      prefix: "",
      postfix: "CVPM",
      title: "Practice Manager"
      },
      {
      id: "B3uGgZk",
      firstName: "Harper",
      lastName: "Anderson",
      prefix: "",
      postfix: "",
      title: "Veterinary Assistant"
      },
      {
      id: "KJ30Pcw",
      firstName: "Leandro",
      lastName: "Barada",
      prefix: "",
      postfix: "",
      title: "Client Services Coordinator"
      }
      ]

  }

  render(){
    //let employeeNames = this.state.employees.map(employee => employee.firstName);
    //https://bobbyhadz.com/blog/react-pass-object-as-props#:~:text=Use%20the%20spread%20syntax%20(..,props%20to%20the%20specified%20component.
    
    //array of Employee compents with employ object passed in props
    let employees = this.state.employees.map(employee => {
      return (
        <Employee 
          {... employee}        
        />
      )
    });

    return (
      <main>
        <h2>All Staff (class)</h2>
        <section className="employee-list">
          {employees}
        </section>
      </main>
    )
  }  
}

export default EmployeeList;
