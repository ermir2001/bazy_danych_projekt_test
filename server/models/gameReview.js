module.exports = (sequelize, DataTypes) => {
    const GameReview = sequelize.define('GameReview', {
      id_game_reviews: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_game: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Game',
          key: 'id_games'
        }
      },
      id_user: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id_user'
        }
      },
      rating: DataTypes.INTEGER,
      review: DataTypes.STRING,
      review_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    }, {
      tableName: 'game_reviews',
      timestamps: false
    });
    
    return GameReview;
  };
  