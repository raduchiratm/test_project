import React from "react";

function handleSubmit(event) {
  //event.preventDefault();
  console.log("hellow");
  
  fetch('https://api.spotify.com/v1/albums')
  .then(response => response.json())
  .then(data => console.log(data));
}

function handleClick() {
  console.log('Click happened, yeii');
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
