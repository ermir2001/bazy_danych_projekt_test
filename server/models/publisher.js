module.exports = (sequelize, DataTypes) => {
    const Publisher = sequelize.define('Publisher', {
      id_publisher: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING
    }, {
      tableName: 'publisher',
      timestamps: false
    });
    
    return Publisher;
  };
  