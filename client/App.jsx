import React from "react";
 
export class App extends React.Component {
  render() {
    return (
        <div>
          <h1>Neon</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
    );
  }
}

