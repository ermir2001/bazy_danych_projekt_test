module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING
    }, {
      tableName: 'user',
      timestamps: false
    });
    
    return User;
  };
  