USE MySellingBush;
DROP TABLE IF EXISTS Produit;
DROP TABLE IF EXISTS SubCategory;
DROP TABLE IF EXISTS Category;
DROP TABLE IF EXISTS UserMSB;
CREATE TABLE Category(
 ID INT NOT NULL AUTO_INCREMENT,
 CategoryTitle VARCHAR(50) NOT NULL, PRIMARY KEY(ID)
);
INSERT INTO Category(CategoryTitle) VALUES
 ("Fleur"), 
 ("Bambous"),
 ("Arbustes"), 
 ("Arbres fruitiers"), 
 ("Légumes"), 
 ("Conifères"),
 ("Plantes grimpantes"), 
 ("Arbres"), 
 ("Outils"), 
 ("Pots");
CREATE TABLE SubCategory(
 ID INT NOT NULL AUTO_INCREMENT,
 SubCategoryTitle VARCHAR(50) NOT NULL,
 CategoryID INT, PRIMARY KEY(ID), FOREIGN KEY (CategoryID) REFERENCES Category(ID)
);
INSERT INTO SubCategory(SubCategoryTitle, CategoryID) VALUES 
 ("Roses", 1), 
 ("Aconite", 1), 
 ("Allium", 1), 
 ("Anemone", 1), 
 ("Coleus", 1), 
 ("Echinacea", 1), 
 ("Angelica", 1), 
 ("Rhododendron", 1), 
 ("BellFlower", 1), 
 ("Crocus", 1), 
 ("Borinda", 2), 
 ("Photinia", 3), 
 ("Agrume", 4), 
 ("Radis", 5), 
 ("Conifère nain", 6), 
 ("Lièrre", 7), 
 ("Grand arbre", 8), 
 ("Outils à moteur", 9), 
 ("Pots en fibre", 10);
CREATE TABLE Produit(
 ID INT NOT NULL AUTO_INCREMENT,
 Product_Name VARCHAR(100) NOT NULL,
 SciName VARCHAR(100),
 typePlant VARCHAR(20),
 IDSubCategory INT NOT NULL,
 price VARCHAR(10),
 nbFlower VARCHAR(10),
 heigh VARCHAR(20),
 width VARCHAR(20),
 temperature VARCHAR(10),
 typeFloor VARCHAR(20),
 color VARCHAR(15),
 img VARCHAR(100),
 timeFlowering VARCHAR(10),
 description VARCHAR(255), PRIMARY KEY(ID), FOREIGN KEY (IDSubCategory) REFERENCES SubCategory(ID)
);
INSERT INTO Produit VALUES (
1, "Rose blanche", "Rosa x alba", "vivace", 1, "23.0", "2 -7", "1.50m - 2.5m", "1.50m - 2.50m", "35 - 40", "Tout type", "blanc", "image", "ete", "...");
INSERT INTO Produit(Product_Name, IDSubCategory) VALUES
("Rose de Damas",1), ("Rose ecossaise",1), ("rose des haies", 1),
("Rose de Lady Banks",1),("Rose de tous les mois",1), 
("Rose mousseuse",1), ("Rose a cent feuilles", 1),
("Rose confederee", 1),("Rose de Jericho", 1),
("Aconit anthore",2),("Allium ampeloprasum", 3), ("Anemone hortensis", 4),
("Coleus abyssinicus", 5), ("Echinacea pallida", 6), 
("Angelica alpina", 7),("Rhododendron luteum", 8),
("Campanula Bellflower", 9), ("Crocus etruscus parl", 10),
("Borinda albocerea",11), ("Photinia pink marble cassini", 12),
("Kumquat", 13), ("Radis Gaudris", 14), ("Pain nain Pumilio", 15),
("Liere d Irland", 16), ("Charme commun", 17),
("Tondeuse", 18), ("Pots Clayfibre L80-H40", 19);

CREATE TABLE UserMSB(
 ID INT NOT NULL AUTO_INCREMENT,
 Login VARCHAR(50) NOT NULL,
 Pass VARCHAR(50) NOT NULL, 
 PRIMARY KEY(ID)
 );
 