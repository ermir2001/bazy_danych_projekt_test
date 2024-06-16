import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import GameDetailsPopup from '../components/GameDetailsPopup';
import '../styles.css';  // Dodaj ten wiersz, aby zaimportować style CSS

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [gameDetails, setGameDetails] = useState(null);
  const [message, setMessage] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/games')
      .then(response => {
        setData(response.data.data);
        setMessage(response.data.message);
        setComment(response.data.comments);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const fetchGameDetails = (id) => {
    axios.get(`http://localhost:3001/api/games/${id}`)
      .then(response => {
        setGameDetails(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the game details!', error);
      });
  };

  const closePopup = () => {
    setGameDetails(null);
  };

  return (
    <div className="dashboard">
      <div className="content">
        <div className="games-list">
          <h2>Games List</h2>
          <p>{message}</p>
          <p>{comment}</p>
          <ul>
            {data.map(item => (
              <li key={item.id_games} onClick={() => fetchGameDetails(item.id_games)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {gameDetails && <GameDetailsPopup gameDetails={gameDetails} onClose={closePopup} />}
      </div>
    </div>
  );
};

export default Dashboard;
