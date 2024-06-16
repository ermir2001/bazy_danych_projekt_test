const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Game = require('./game')(sequelize, Sequelize);
db.Mechanic = require('./mechanic')(sequelize, Sequelize);
db.GameMechanic = require('./gameMechanic')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);
db.GameReview = require('./gameReview')(sequelize, Sequelize);
db.Publisher = require('./publisher')(sequelize, Sequelize);
db.Version = require('./version')(sequelize, Sequelize);

// Definiowanie relacji między modelami
db.Game.belongsToMany(db.Mechanic, { through: db.GameMechanic, foreignKey: 'id_game' });
db.Mechanic.belongsToMany(db.Game, { through: db.GameMechanic, foreignKey: 'id_mechanic' });

db.Game.hasMany(db.Version, { foreignKey: 'id_game' });
db.Version.belongsTo(db.Game, { foreignKey: 'id_game' });

db.Version.belongsTo(db.Publisher, { foreignKey: 'id_publisher' });
db.Publisher.hasMany(db.Version, { foreignKey: 'id_publisher' });

db.Game.hasMany(db.GameReview, { foreignKey: 'id_game' });
db.GameReview.belongsTo(db.Game, { foreignKey: 'id_game' });

db.User.hasMany(db.GameReview, { foreignKey: 'id_user' });
db.GameReview.belongsTo(db.User, { foreignKey: 'id_user' });

module.exports = db;
