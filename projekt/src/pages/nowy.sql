--Tworzenie użytkownika
CREATE USER 'tester'@'localhost' IDENTIFIED BY 'tester';

--Pełne uprawnienia do konkretnej bazy danych
GRANT ALL PRIVILEGES ON boardgames.* TO 'tester'@'localhost';

--Ograniczone uprawnienia tylko do odczytu
GRANT SELECT ON boardgames.* TO 'tester'@'localhost';

--Zastosowanie zmian
FLUSH PRIVILEGES;


--Wyświetlanie użytkowników i ich uprawnień
SELECT user, host FROM mysql.user;


--Wyświetlanie uprawnień dla konkretnego użytkownika
SHOW GRANTS FOR 'new_user'@'localhost';


INSERT INTO `boardgames`.`game_reviews` (`id_game_reviews`, `id_game`, `id_user`, `rating`, `review`, `review_date`) VALUES
(1, 4, 1, 8, 'Świetna gra z dużą regrywalnością!', '2023-01-01 10:00:00'),



--Modyfikacja tabeli games poprzez dodanie min_players, max_players, play_time i complexity
ALTER TABLE `boardgames`.`games`
ADD COLUMN `min_players` INT(11) NOT NULL DEFAULT 1,
ADD COLUMN `max_players` INT(11) NOT NULL DEFAULT 1,
ADD COLUMN `play_time` INT(11) NULL DEFAULT NULL,
ADD COLUMN `complexity` DECIMAL(3,2) NULL DEFAULT NULL;

--Modyfikacja tabeli versions poprzez dodanie components
ALTER TABLE `boardgames`.`versions` 
ADD COLUMN `components` VARCHAR(255) NULL DEFAULT NULL;



--Wprowadzenie danych do tabeli versions
INSERT INTO `boardgames`.`versions` (`id_versions`, `id_game`, `version_number`, `release_date`, `id_publisher`, `components`) VALUES
(1, 1, 1, '2020-01-01', 2, 'Board, resource cards, settlements, roads, cities, dice');

--Wprowadzenie danych do tabeli publisher
INSERT INTO `boardgames`.`publisher` (`id_publisher`, `name`) VALUES
(1, 'Column2')


--Pobranie wszystkich gier wraz z ich recenzjami i użytkownikami, którzy je ocenili
SELECT g.name AS game_name, r.rating, r.review, u.username 
FROM boardgames.games g
JOIN boardgames.game_reviews r ON g.id_games = r.id_game
JOIN boardgames.user u ON r.id_user = u.id_user;


--Pobranie gier, które mają najwyższą średnią ocenę
SELECT g.name, g.description, g.min_players, g.max_players, g.play_time, g.complexity, 
       (SELECT AVG(rating) 
        FROM boardgames.game_reviews gr 
        WHERE gr.id_game = g.id_games) AS average_rating
FROM boardgames.games g
ORDER BY average_rating DESC;


--Lista mechanik wraz z ilością gier które posiadają taką mechanikę
SELECT m.id_mechanics, m.name AS mechanic_name, 
       (SELECT COUNT(*) 
        FROM boardgames.game_mechanics gm 
        WHERE gm.id_mechanic = m.id_mechanics) AS game_count
FROM boardgames.mechanics m
ORDER BY game_count DESC;
