import React from "react";
//
const App = () => {
  return (
    <div
      style={{
        margin: "10px",
        padding: "10px",
        textAlign: "center",
        background: "#efbcf5",
      }}
    >
      <h1>School application</h1>
      <table
        style={{
          borderCollapse: "collapse",
          border: "1px solid #000000",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Prasahnt</td>
            <td>20</td>
            <td>A</td>
          </tr>
          <tr>
            <td>Kiran</td>
            <td>30</td>
            <td>B</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
