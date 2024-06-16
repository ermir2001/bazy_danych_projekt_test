module.exports = (sequelize, DataTypes) => {
    const Version = sequelize.define('Version', {
      id_versions: {
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
      version_number: DataTypes.INTEGER,
      release_date: DataTypes.DATE,
      id_publisher: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Publisher',
          key: 'id_publisher'
        }
      },
      components: DataTypes.STRING
    }, {
      tableName: 'versions',
      timestamps: false
    });
    
    return Version;
  };
  