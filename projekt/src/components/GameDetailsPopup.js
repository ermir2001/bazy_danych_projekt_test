import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const GameDetailsPopup = ({ gameDetails, onClose }) => {
  if (!gameDetails) return null;

    console.log(gameDetails);

  const renderComplexity = (complexity) => {
    const stars = [];
    for (let i = 0; i < complexity; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} />);
    }
    return stars;
  };


  return (
    <div className="popup">
      <div className="popup-close" onClick={onClose}>ⓧ</div>
      <div className="popup-content">
        <h2>{gameDetails.name}</h2>
        <p>{gameDetails.description}</p>
        <p><strong>Min Players:</strong> {gameDetails.min_players}</p>
        <p><strong>Max Players:</strong> {gameDetails.max_players}</p>
        <p><strong>Play Time:</strong> {gameDetails.play_time} minutes</p>
        <p><strong>Complexity:</strong> {renderComplexity(gameDetails.complexity)}</p>
        
        <h3>Versions</h3>
        <ul>
          {gameDetails.Versions && gameDetails.Versions.length > 0 ? (
            gameDetails.Versions.map((version, index) => {
              const releaseDate = new Date(version.release_date);
              const formattedDate = !isNaN(releaseDate.getTime())
                ? releaseDate.toLocaleDateString()
                : 'N/A';

              return (
                <li key={index}>
                  <p><strong>Version:</strong> {version.version_number}</p>
                  <p><strong>Release Date:</strong> {formattedDate}</p>
                  <p><strong>Publisher:</strong> {version.publisher_name}</p>
                </li>
              );
            })
          ) : (
            <li>No versions available</li>
          )}
        </ul>
        
        <h3>Reviews</h3>
        <ul>
          {gameDetails.GameReviews && gameDetails.GameReviews.length > 0 ? (
            gameDetails.GameReviews.map((review, index) => (
              <li key={index}>
                <p><strong>Rating:</strong> {review.rating}</p>
                <p><strong>Review:</strong> {review.review}</p>
                <p><strong>Date:</strong> {new Date(review.review_date).toLocaleDateString()}</p>
              </li>
            ))
          ) : (
            <li>No reviews available</li>
          )}
        </ul>
        
        <h3>Mechanics</h3>
        <ul>
          {gameDetails.Mechanics && gameDetails.Mechanics.length > 0 ? (
            gameDetails.Mechanics.map((mechanic, index) => (
              <li key={index}>
                <p><strong>Name:</strong> {mechanic.name}</p>
                <p><strong>Description:</strong> {mechanic.description}</p>
              </li>
            ))
          ) : (
            <li>No mechanics available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default GameDetailsPopup;