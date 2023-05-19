import React from 'react'

const Form = () => {

    function IsCorrect(){
      if (document.getElementById("1").checked){
          alert("correct!"); 
          document.getElementById("1").checked = false;
      }
      else {
       alert("Wrong :(");
       document.getElementById("2" & "3").checked = false;
      }
    }

  return (
    <form onClick={IsCorrect}>    
      <h2>Quiz time! </h2>
      <h3>Whats the correct answer about band?</h3>
      <dt>
        <li>Fergie replaced Kim hill in 2002 <label for="1">
          <input id="1" type="checkbox"  ></input> </label>  </li>
        <li> BEP formed in 1998 <label for="2">
          <input id="2" type="checkbox" ></input> </label> </li>
        <li> BEP are highly nutritious, rich in fibre and protein <label for="3">
          <input id="3" type="checkbox" ></input> </label> </li>
      </dt>
        
    </form>
  

  )
}

export default Form;
