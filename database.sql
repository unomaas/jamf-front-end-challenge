-- Use this code to create the SQL database to pull userGroup options from: 
CREATE TABLE "userGroups" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL
);

INSERT INTO "userGroups" ("name")
VALUES ('Group A'), ('Group B'), ('Group C');