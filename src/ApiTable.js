// src/ApiTable.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function ApiTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace this URL with your JSON API endpoint
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(data);

  return (
    <div className="container">
      <h1>Sourav's Dummy Data</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Prof.Pic</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {data?.users?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{<img src={item.image} />}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.domain}</td>
              <td>{item.ip}</td>
              <td>{item.university}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ApiTable;
