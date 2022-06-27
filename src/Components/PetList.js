export const PetList = (props) => {
  const {employeePets, buttonClicked} = props;

  if (buttonClicked === true && employeePets !== '') {
    return (
      <aside className="pets-list">     
         <p>{employeePets}</p>        
      </aside>      
    )
  } else if ( buttonClicked === true && employeePets === '') {  
    return (
      <aside className="pets-list">
        <p>No pets listed for this employee.</p>                
      </aside>
    )
  } else {  
    return (
      <aside className="pets-list"> </aside>
    );
  }
};

export default PetList;
