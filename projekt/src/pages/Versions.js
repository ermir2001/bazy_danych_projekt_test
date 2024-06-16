import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Versions = () => {
  const [versions, setVersions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/versions')
      .then(response => {
        setVersions(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the versions!', error);
      });
  }, []);

  return (
    <div>
      <h2>Versions</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Game ID</th>
            <th>Version Number</th>
            <th>Release Date</th>
            <th>Publisher ID</th>
            <th>Components</th>
          </tr>
        </thead>
        <tbody>
          {versions.map(version => (
            <tr key={version.id_versions}>
              <td>{version.id_versions}</td>
              <td>{version.id_game}</td>
              <td>{version.version_number}</td>
              <td>{new Date(version.release_date).toLocaleDateString()}</td>
              <td>{version.id_publisher}</td>
              <td>{version.components}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Versions;
