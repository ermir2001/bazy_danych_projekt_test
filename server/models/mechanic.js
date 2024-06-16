module.exports = (sequelize, DataTypes) => {
    const Mechanic = sequelize.define('Mechanic', {
      id_mechanics: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING
    }, {
      tableName: 'mechanics',
      timestamps: false
    });
    
    return Mechanic;
  };
  