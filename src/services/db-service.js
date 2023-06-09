const { getConnection } = require("../database/mysql-connection.js");

const db = getConnection();

module.exports = {
    //Seleccionar todos los USUARIOS
    async getAllUsers() {
        const statement = `
      SELECT *
      FROM users
      `;
        const [rows] = await db.execute(statement);
        return rows;
    },

    //Modificar datos de Usuario
    async updateUsersById(userId, payload) {
        const statement = `
      UPDATE users
      SET first_name = ?, last_name = ?, bio_summary = ?, profile_img = ?
      WHERE id = ?
      `;
        const [rows] = await db.execute(statement, [
            payload.first_name,
            payload.last_name,
            payload.bio_summary,
            payload.profile_img,
            userId,
        ]);
        return rows;
    },

    //Seleccionar un usuario por ID
    async getUsersById(userId) {
        const statement = `
      SELECT *
      FROM users as u
      WHERE u.id = ? 
   `;
        const [rows] = await db.execute(statement, [userId]);
        return rows;
    },

    ////Seleccionar todos los ITEMS
    async getAllItems() {
        const statement = `
    SELECT *
    FROM items
    `;
        const [rows] = await db.execute(statement);
        return rows;
    },

    //Seleccionar un item por ID
    async getItemsById(itemId) {
        const statement = `
        SELECT *
        FROM items as u
        WHERE u.id = ? 
     `;
        const [rows] = await db.execute(statement, [itemId]);
        return rows;
    },

    //Modificar datos de Items
    async updateItemsById(itemId, payload) {
        const statement = `
      UPDATE items
      SET name = ?, description = ?, price = ?, user_location = ?, condition = ?
      WHERE id = ?
      `;
        const [rows] = await db.execute(statement, [
            payload.name,
            payload.description,
            payload.price,
            payload.user_location,
            payload.condition,
            itemId,
        ]);
        return rows;
    },

    ////Seleccionar todos los ITEM_STATUS
    async getItemStatus() {
        const statement = `
    SELECT *
    FROM item_status
    `;
        const [rows] = await db.execute(statement);
        return rows;
    },

    ////Seleccionar todos los ITEM_CONDITION
    async getItemCondition() {
        const statement = `
    SELECT *
    FROM item_condition
    `;
        const [rows] = await db.execute(statement);
        return rows;
    },

    ////Seleccionar todos los DEALS
    async getDeal() {
        const statement = `
        SELECT *
        FROM deal
        `;
        const [rows] = await db.execute(statement);
        return rows;
    },

    //Modificar datos de los DEALS_STATUS
    async updateDealStatusById(dealStatusId, payload) {
        const statement = `
      UPDATE deal_status
      SET name = ?
      WHERE id = ?
      `;
        const [rows] = await db.execute(statement, [
            payload.name,
            dealStatusId,
        ]);
        return rows;
    },

    //Seleccionar un DEAL por ID
    async getDealsById(dealId) {
        const statement = `
    SELECT *
    FROM deal as u
    WHERE u.id = ? 
    `;
        const [rows] = await db.execute(statement, [dealId]);
        return rows;
    },

    ////Seleccionar todos los DEALS_ITEMS
    async getDealItems() {
        const statement = `
    SELECT *
    FROM deal_items
    `;
        const [rows] = await db.execute(statement);
        return rows;
    },

    ////Seleccionar todos los DEALS_STATUS
    async getDealStatus() {
        const statement = `
    SELECT *
    FROM deal_status
    `;
        const [rows] = await db.execute(statement);
        return rows;
    },

    ////Seleccionar las CATEGORIAS
    async getCategory() {
        const statement = `
    SELECT *
    FROM category
    `;
        const [rows] = await db.execute(statement);
        return rows;
    },

    //Seleccionar una CATEGORIA por ID
    async getCategoryById(categoryId) {
        const statement = `
    SELECT *
    FROM category as u
    WHERE u.id = ? 
    `;
        const [rows] = await db.execute(statement, [categoryId]);
        return rows;
    },

    ////Seleccionar el EXCHANGE_CONDITIONS
    async getExchangeConditions() {
        const statement = `
    SELECT *
    FROM exchange_conditions
    `;
        const [rows] = await db.execute(statement);
        return rows;
    },

    ////Seleccionar los VALIDATION_CODES
    async getvalidationCodes() {
        const statement = `
    SELECT *
    FROM validation_codes
    `;
        const [rows] = await db.execute(statement);
        return rows;
    },

    //Seleccionar un VALIDATION_CODE por ID
    async getvalidationCodesById(validationId) {
        const statement = `
      SELECT *
      FROM validation_codes as u
      WHERE u.id = ? 
    `;
        const [rows] = await db.execute(statement, [validationId]);
        return rows;
    },
};
