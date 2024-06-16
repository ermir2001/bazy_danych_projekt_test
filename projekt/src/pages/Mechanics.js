import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mechanics = () => {
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/mechanics')
      .then(response => {
        setMechanics(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the mechanics!', error);
      });
  }, []);

  return (
    <div>
      <h2>Mechanics</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {mechanics.map(mechanic => (
            <tr key={mechanic.id_mechanics}>
              <td>{mechanic.id_mechanics}</td>
              <td>{mechanic.name}</td>
              <td>{mechanic.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mechanics;
