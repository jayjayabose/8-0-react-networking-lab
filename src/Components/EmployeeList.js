import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

class EmployeeList extends React.Component {
  
  constructor(){
    super();
    this.state = {
      employees : [],
      pets : []
    }
  }

  componentDidMount(){
    this.getEmployees();
    this.getPets();
    //console.log(`componentDidMount: employees ${this.state.employees}`); //why is this empty?
    //console.log(`componentDidMount: pets ${this.state.pets}`);    //why is this empty?
  }

  getEmployees(){    
    fetch('https://vet-lab-8-4.herokuapp.com/api/employees')
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        employees : json
      });      
    })
    .catch((error) => {
      console.log('Error fetching employees:' + error)
    });
  }

  getPets(){
    fetch('https://vet-lab-8-4.herokuapp.com/api/pets')
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        pets : json
      });      
    })
    .catch((error) => {
      console.log('Error fetching pets:' + error)
    });
  }

  getEmployeePets(employee){
    return this.state.pets.filter(pet => pet.employeeId === employee.id).map(pet => pet.name).join(', '); 
  }

  render(){
      //https://bobbyhadz.com/blog/react-pass-object-as-props#:~:text=Use%20the%20spread%20syntax%20(..,props%20to%20the%20specified%20component.
    
    //array of Employee compents, spread employee object to props
    let employees = this.state.employees.map(employee => {
      let employeePets = this.getEmployeePets(employee);
      console.log(`employeePets: ${employeePets}`);
      return (
        <Employee {... employee} employeePets = {employeePets}/>
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
