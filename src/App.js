import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  setData() {
    let users = [
      {
        id: 1,
        name: "Yash",
        amount: 25,
        date: '26/10/2020'
      },
      {
        id: 2,
        name: "Rajeev",
        amount: 26,
        date: '26/10/2020'
      },
      {
        id: 3,
        name: "Vikas",
        amount: 27,
        date: '26/10/2020'
      },
      {
        id: 4,
        name: "Ajay",
        amount: 28,
        date: '26/10/2020'
      },
      {
        id: 5,
        name: "Vishal",
        amount: 29,
        date: '26/10/2020'
      }
    ];
    localStorage.setItem("myData", JSON.stringify(users));
  }

  renderTableData = () => {
    return JSON.parse(localStorage.getItem("myData")) !== null ? (
      JSON.parse(localStorage.getItem("myData")).map((item, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{item.date}</td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  };
 
  render() {
    return (
      <div className="container">
        <h2 style={{ paddingBottom: "30px", paddingTop: "30px" }}>
          Table Data from Local Storage
        </h2>
        <button onClick={() => this.setData()}>Set Data</button>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
            
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;