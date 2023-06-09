require("dotenv").config();
const { createPool } = require("./mysql-connection.js");

const DATABASE_NAME = process.env.MYSQL_DATABASE;

const initDB = async () => {
    const pool = createPool();
    await pool.query(`DROP DATABASE IF EXISTS  ${DATABASE_NAME}`);
    await pool.query(`CREATE DATABASE ${DATABASE_NAME} ` );
    await pool.query(`USE ${DATABASE_NAME} `);

    await pool.query(`
    CREATE TABLE users(
        id CHAR(36) PRIMARY KEY,
        username VARCHAR(150) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        password VARCHAR(150) NOT NULL,
        location VARCHAR(150) NOT NULL,
        first_name VARCHAR(150) NOT NULL,
        last_name VARCHAR(150) NOT NULL,
        bio_summary VARCHAR(150) NOT NULL,
        profile_img VARCHAR(150) NOT NULL,
        acceptedTOS BOOL NOT NULL,
        emailValidated BOOL NOT NULL DEFAULT false,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);

await pool.query(`
    CREATE TABLE validation_codes(
        id CHAR(36) PRIMARY KEY,
        code CHAR(8) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        userid CHAR(36) NOT NULL,
        FOREIGN KEY (userid) REFERENCES users(id)
    )`);

await pool.query(`
    CREATE TABLE category(
        id CHAR(36) PRIMARY KEY,
        category_name VARCHAR(150) NOT NULL
    )`);

await pool.query(`
    CREATE TABLE item_condition(
        id CHAR(36) PRIMARY KEY,
        condition_name VARCHAR(150) NOT NULL
    )`);

await pool.query(`
    CREATE TABLE item_status(
        id CHAR(36) PRIMARY KEY,
        status_name VARCHAR(150) NOT NULL
    )`);

await pool.query(`
    CREATE TABLE items(
        id CHAR(36) PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        description TEXT NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        category_id CHAR(3) NOT NULL,
        price FLOAT(9,2),
        userid CHAR(36) NOT NULL,
        FOREIGN KEY (userid) REFERENCES users(id)
    )`);

await pool.query(`
    CREATE TABLE deal_status(
        id CHAR(36) PRIMARY KEY,
        name VARCHAR(150) NOT NULL
    )`);

await pool.query(`
    CREATE TABLE deal(
        id CHAR(36) PRIMARY KEY,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        sellerid CHAR(36) NOT NULL,
        FOREIGN KEY (sellerid) REFERENCES users(id),
        buyerid CHAR(36) NOT NULL,
        FOREIGN KEY (buyerid) REFERENCES users(id)
    )`);

await pool.query(`
    CREATE TABLE deal_items(
        id CHAR(36) PRIMARY KEY,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        itemid CHAR(36) NOT NULL,
        FOREIGN KEY (itemid) REFERENCES items(id),
        ownerid CHAR(36) NOT NULL,
        FOREIGN KEY (ownerid) REFERENCES users(id),
        type VARCHAR(150) NOT NULL
    )`);

await pool.query(`
    CREATE TABLE exchange_conditions(
        id CHAR(36) PRIMARY KEY,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        dealid CHAR(36) NOT NULL,
        FOREIGN KEY (dealid) REFERENCES deal(id),
        exchangelocation VARCHAR(150) NOT NULL,
        exchangedate TIMESTAMP
    )`);

// Insert mock data into the users table
await pool.query(`
    INSERT INTO users (id, username, email, password, location, first_name, last_name, bio_summary, profile_img, acceptedTOS, emailValidated)
    VALUES
        ('1', 'john_doe', 'john@example.com', 'password123', 'New York', 'John', 'Doe', 'Bio summary 1', 'profile_img_1.jpg', true, true),
        ('2', 'jane_smith', 'jane@example.com', 'password456', 'London', 'Jane', 'Smith', 'Bio summary 2', 'profile_img_2.jpg', true, false),
        ('3', 'bob_johnson', 'bob@example.com', 'password789', 'Paris', 'Bob', 'Johnson', 'Bio summary 3', 'profile_img_3.jpg', false, false);
`);

// Insert mock data into the validation_codes table
await pool.query(`
    INSERT INTO validation_codes (id, code, createdAt, userid)
    VALUES
        ('1', 'ABC123', '2022-01-01 10:00:00', '1'),
        ('2', 'DEF456', '2022-01-02 11:00:00', '2'),
        ('3', 'GHI789', '2022-01-03 12:00:00', '3');
`);

// Insert mock data into the category table
await pool.query(`
    INSERT INTO category (id, category_name)
    VALUES
        ('1', 'Category 1'),
        ('2', 'Category 2'),
        ('3', 'Category 3');
`);

// Insert mock data into the item_condition table
await pool.query(`
    INSERT INTO item_condition (id, condition_name)
    VALUES
        ('1', 'Condition 1'),
        ('2', 'Condition 2'),
        ('3', 'Condition 3');
`);

// Insert mock data into the item_status table
await pool.query(`
    INSERT INTO item_status (id, status_name)
    VALUES
        ('1', 'Status 1'),
        ('2', 'Status 2'),
        ('3', 'Status 3');
`);

// Insert mock data into the items table
await pool.query(`
    INSERT INTO items (id, name, description, createdAt, category_id, price, userid)
    VALUES
        ('1', 'Item 1', 'Description 1', '2022-01-01 10:00:00', '1', 9.99, '1'),
        ('2', 'Item 2', 'Description 2', '2022-01-02 11:00:00', '2', 19.99, '2'),
        ('3', 'Item 3', 'Description 3', '2022-01-03 12:00:00', '3', 29.99, '3');
`);

// Insert mock data into the deal_status table
await pool.query(`
    INSERT INTO deal_status (id, name)
    VALUES
        ('1', 'Status 1'),
        ('2', 'Status 2'),
        ('3', 'Status 3');
`);

// Insert mock data into the deal table
await pool.query(`
    INSERT INTO deal (id, createdAt, sellerid, buyerid)
    VALUES
        ('1', '2022-01-01 10:00:00', '1', '2'),
        ('2', '2022-01-02 11:00:00', '2', '3'),
        ('3', '2022-01-03 12:00:00', '3', '1');
`);

// Insert mock data into the deal_items table
await pool.query(`
    INSERT INTO deal_items (id, createdAt, itemid, ownerid, type)
    VALUES
        ('1', '2022-01-01 10:00:00', '1', '1', 'Type 1'),
        ('2', '2022-01-02 11:00:00', '2', '2', 'Type 2'),
        ('3', '2022-01-03 12:00:00', '3', '3', 'Type 3');
`);

// Insert mock data into the exchange_conditions table
await pool.query(`
    INSERT INTO exchange_conditions (id, createdAt, dealid, exchangelocation, exchangedate)
    VALUES
        ('1', '2022-01-01 10:00:00', '1', 'Location 1', '2022-02-01 10:00:00'),
        ('2', '2022-01-02 11:00:00', '2', 'Location 2', '2022-02-02 11:00:00'),
        ('3', '2022-01-03 12:00:00', '3', 'Location 3', '2022-02-03 12:00:00');
`);
   


    await pool.end();
};

initDB();



