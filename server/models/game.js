module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('Game', {
      id_games: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      min_players: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      max_players: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      play_time: DataTypes.INTEGER,
      complexity: DataTypes.DECIMAL(3, 2)
    }, {
      tableName: 'games',
      timestamps: false
    });
    
    return Game;
  };
  