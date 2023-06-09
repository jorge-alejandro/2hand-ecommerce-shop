const express = require("express");
const { Router, json } = require("express");
const router = Router();
const { getDeal } = require("../services/db-service");
const { getDealItems } = require("../services/db-service");
const { getDealStatus } = require("../services/db-service");
const { getExchangeConditions } = require("../services/db-service");
const { getDealsById } = require("../services/db-service");
const { updateDealStatusById } = require("../services/db-service");
module.exports = router;

//View All Deals
router.get("/deals", async (req, res) => {
    const results = await getDeal();
    res.status(200).json({
        results,
    });
});

//View Deal by ID
router.get("/deal/:id", async (req, res) => {
    const result = await getDealsById(req.params.id);
    res.status(200).json(result);
});

//View All Deal Items
router.get("/deal/items", async (req, res) => {
    const results = await getDealItems();
    res.status(200).json({
        results,
    });
});

//View All Deal Status
router.get("/deal/status", async (req, res) => {
    const results = await getDealStatus();
    res.status(200).json({
        results,
    });
});

//Create a Deal
router.post("/deals", express.json(), async (req, res) => {
    res.status(200).json({
        succes: true,
        data: "se crea el TROCO Deal",
    });
});

//Modify Deal Status
router.patch("/deal/status-update/:id", express.json(), async (req, res) => {
    const result = await updateDealStatusById(req.params.id, req.body);
    res.status(200).json({
        succes: true,
        data: "se modifica el TROCO deal_status",
    });
});

//Delete Deal ---> This is not gonna be use, only for testing
router.patch("/deals", express.json(), async (req, res) => {
    res.status(200).json({
        succes: true,
        data: "se elimina el TROCO Deal",
    });
});

//Exchange Condition
router.get("/exchange/condition", async (req, res) => {
    const results = await getExchangeConditions();
    res.status(200).json({
        results,
    });
});
