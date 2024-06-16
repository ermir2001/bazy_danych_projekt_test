import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/reviews')
      .then(response => {
        setReviews(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the reviews!', error);
      });
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Game ID</th>
            <th>User ID</th>
            <th>Rating</th>
            <th>Review</th>
            <th>Review Date</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map(review => (
            <tr key={review.id_game_reviews}>
              <td>{review.id_game_reviews}</td>
              <td>{review.id_game}</td>
              <td>{review.id_user}</td>
              <td>{review.rating}</td>
              <td>{review.review}</td>
              <td>{new Date(review.review_date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
