import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Publishers = () => {
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/publishers')
      .then(response => {
        setPublishers(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the publishers!', error);
      });
  }, []);

  return (
    <div>
      <h2>Publishers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {publishers.map(publisher => (
            <tr key={publisher.id_publisher}>
              <td>{publisher.id_publisher}</td>
              <td>{publisher.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Publishers;
