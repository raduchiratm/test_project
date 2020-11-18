import React from "react";

function handleSubmit(event) {
  fetch('https://localhost/connection')
  .then(response => response.json())
  .then(data => console.log(data));
  
  event.preventDefault();
}

function handleClick(event) {
  fetch('https://localhost/add/dummy/data', {
        method: 'POST',
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
  
      event.preventDefault();
}

export default function App() { 
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <label>User </label>
        <input readOnly type="text" data-test="username" value="username" />

        <label> Password </label>
        <input readOnly type="password" data-test="password" value="password" />

        <input type="submit" value="Login" data-test="submit" />
      </form>

      <br/><button onClick={handleClick}>Add Dummy Data</button>
    </div>
  );
}
