import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

// PUBLIC API: https://agify.io/

function AgeGuesser() {
  // We are setting our ageData to an number--default is 0
  const [age, setAge] = useState(0)

  // TODO: Finish implementing a component that will gues your age
  // based on your name
  // 1. Make an Axios GET request to the API: https://agify.io/
  //    Include the given name in the request by combining strings
  //     (see/copy from QuoteView for how to make request)
  // 2. Log the result and see what it returns
  // 3. Parse the returned object to grab the age
  // 4. Update the state to show their expected age!

  function updateAge() {
    const name = prompt("What's your name?")
    

  }
  


  return (
    <div className="section">
      <h2>Let us guess your age!</h2>
      <button onClick={updateAge}>Click here!</button>

      {/* This syntax will only render the below code if age is NOT 0*/}
      {age != 0 && <h4>Your age is.... {age}</h4>}
    

    </div>
  )
}

// This line is important! So other files can use this
export default AgeGuesser