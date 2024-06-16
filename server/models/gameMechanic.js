module.exports = (sequelize, DataTypes) => {
    const GameMechanic = sequelize.define('GameMechanic', {
      id_game: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Game',
          key: 'id_games'
        },
        primaryKey: true
      },
      id_mechanic: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Mechanic',
          key: 'id_mechanics'
        },
        primaryKey: true
      }
    }, {
      tableName: 'game_mechanics',
      timestamps: false
    });
    
    return GameMechanic;
  };
  