USE MySellingBush;

DROP TABLE IF EXISTS SubCategory;
DROP TABLE IF EXISTS Category;

CREATE TABLE Category(
 ID INT,
 CategoryTitle VARCHAR(50) NOT NULL,
 PRIMARY KEY(ID)
);

INSERT INTO Category VALUES 
 (1, "Fleur"), 
 (2, "Bambous"),
 (3, "Arbustes"), 
 (4, "Arbres fruitiers"), 
 (5, "Légumes"), 
 (6, "Conifères"),
 (7, "Plantes grimpantes"), 
 (8, "Arbres"), 
 (9, "Outils"), 
 (10, "Pots");




CREATE TABLE SubCategory(
 ID INT,
 SubCategoryTitle VARCHAR(50) NOT NULL,
 CategoryID INT,
 PRIMARY KEY(ID),
 FOREIGN KEY (CategoryID) REFERENCES Category(ID)
);


INSERT INTO SubCategory VALUES 
 (1, "Roses", 1), 
 (2, "Aconite", 1), 
 (3, "Allium", 1), 
 (4, "Anemone", 1), 
 (5, "Coleus", 1), 
 (6, "Echinacea", 1), 
 (7, "Angelica", 1), 
 (8, "Rhododendron", 1), 
 (9, "BellFlower", 1), 
 (10, "Crocus", 1), 
 (11, "Borinda", 2), 
 (12, "Photinia", 3), 
 (13, "Agrume", 4), 
 (14, "Radis", 5), 
 (15, "Conifère nain", 6), 
 (16, "Lièrre", 7), 
 (17, "Grand arbre", 8), 
 (18, "Outils à moteur", 9), 
 (19, "Pots en fibre", 10);
 
 SELECT * FROM SubCategory