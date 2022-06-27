import PetList from "./PetList";
import "./Employee.css";
import React from "react";

/**
id: "KJ30Pcw",
firstName: "Leandro",
lastName: "Barada",
prefix: "",
postfix: "",
title: "Client Services Coordinator"
 */



class Employee extends React.Component {
  constructor(){
    super();
    this.state = {
      buttonClicked : false
    };
  }

  handleClick = () => { 
    this.setState({  //Uncaught TypeError: Cannot read property 'setState' of undefined // until changed to arrow notation // why ??? something about binding ?
      buttonClicked : true
    })    
  }

  render(){
    const {id, firstName, lastName, prefix, postfix, title, employeePets} = this.props;
    //const {employee} = props.employee; //employee object
    //console.log(`Employee.render()  buttonClicked: ${this.state.buttonClicked}`);  
    let displayName = `${firstName} ${lastName}`;
    if (prefix != '') displayName = prefix + ' ' + displayName;
    if (postfix != '') displayName = displayName + `, ${postfix}`;
    
  
    return (
      <article className="employee">
        <h3>{displayName}</h3>       
        <h4>{title}</h4>
        <button onClick={this.handleClick}>Show Pets</button>
        <PetList 
          employeePets={employeePets}
          buttonClicked = {this.state.buttonClicked}
          />
      </article>
    )    
  }
}
export default Employee;
