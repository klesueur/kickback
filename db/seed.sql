DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS deals;
DROP TABLE IF EXISTS merch;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    first VARCHAR(50),
    last VARCHAR(50),
    company VARCHAR(50),
    password TEXT 
);

CREATE TABLE deals (
    deal_id SERIAL PRIMARY KEY,
    lease_id VARCHAR(10),
    customer_first VARCHAR(50),
    customer_last VARCHAR(50),
    purchase_total NUMERIC,
    month VARCHAR(12),
    rep_id INTEGER REFERENCES users(id)
    );

CREATE TABLE merch (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    img TEXT
    );