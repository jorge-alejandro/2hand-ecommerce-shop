const express = require("express");
const { Router, json } = require("express");
const router = Router();
const { getAllItems } = require("../services/db-service");
const { getItemStatus } = require("../services/db-service");
const { getItemCondition } = require("../services/db-service");
const { getItemsById } = require("../services/db-service");
const { updateItemsById } = require("../services/db-service");
module.exports = router;

//View All Items
router.get("/items", async (req, res) => {
    const results = await getAllItems();
    res.status(200).json({
        results,
    });
});

//View Items by ID
router.get("/items/:id", async (req, res) => {
    const result = await getItemsById(req.params.id);
    res.status(200).json(result);
});

//View Item_Condition
router.get("/item/condition", async (req, res) => {
    const results = await getItemCondition();
    res.status(200).json({
        results,
    });
});

//View Item_Status
router.get("/item/status", async (req, res) => {
    const results = await getItemStatus();
    res.status(200).json({
        results,
    });
});

//Create an Item
router.post("/items", express.json(), async (req, res) => {
    res.status(200).json({
        succes: true,
        data: "se crea el TROCO item",
    });
});

//Modify Item data
router.patch("/item-update/:id", express.json(), async (req, res) => {
    const result = await updateItemsById(req.params.id, req.body);
    res.status(200).json({
        succes: true,
        data: "se modifica la info del TROCO item",
    });
});

//Delete Item
router.patch("/items", express.json(), async (req, res) => {
    res.status(200).json({
        succes: true,
        data: "se elimina el TROCO item",
    });
});
