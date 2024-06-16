const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Sprawdzenie połączenia z bazą danych
db.sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Synchronizacja modeli z bazą danych
db.sequelize.sync();

// Endpoint do pobierania wszystkich gier
app.get('/api/games', async (req, res) => {
  try {
    const games = await db.Game.findAll();
    res.json({
      message: 'Games retrieved successfully',
      comments: 'This is an additional comment',
      data: games
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Endpoint do pobierania szczegółowych informacji o grze po ID
app.get('/api/games/:id', async (req, res) => {
  try {
    const game = await db.Game.findByPk(req.params.id, {
      include: [
        {
          model: db.Version,
          include: [db.Publisher]
        },
        {
          model: db.GameReview,
          include: [db.User]
        },
        {
          model: db.Mechanic,
          through: db.GameMechanic
        }
      ]
    });

    if (!game) {
      return res.status(404).send({ message: 'Game not found' });
    }

    res.json({
      message: 'Game details retrieved successfully',
      data: game
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Endpoint do pobierania wszystkich mechanik
app.get('/api/mechanics', async (req, res) => {
  try {
    const mechanics = await db.Mechanic.findAll();
    res.json({
      message: 'Mechanics retrieved successfully',
      data: mechanics
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Endpoint do pobierania wszystkich użytkowników
app.get('/api/users', async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json({
      message: 'Users retrieved successfully',
      data: users
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Endpoint do pobierania wszystkich recenzji
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await db.GameReview.findAll();
    res.json({
      message: 'Reviews retrieved successfully',
      data: reviews
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Endpoint do pobierania wszystkich wydawców
app.get('/api/publishers', async (req, res) => {
  try {
    const publishers = await db.Publisher.findAll();
    res.json({
      message: 'Publishers retrieved successfully',
      data: publishers
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Endpoint do pobierania wszystkich wersji
app.get('/api/versions', async (req, res) => {
  try {
    const versions = await db.Version.findAll();
    res.json({
      message: 'Versions retrieved successfully',
      data: versions
    });
  } catch (err) {
    res.status(500).send(err);
  }
});





app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
