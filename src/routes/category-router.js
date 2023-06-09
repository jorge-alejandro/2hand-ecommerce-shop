const express = require("express");
const { Router, json } = require("express");
const router = Router();
const { getCategory } = require("../services/db-service");
const { getCategoryById } = require("../services/db-service");
module.exports = router;

//View All CATEGORY
router.get("/category", async (req, res) => {
    const results = await getCategory();
    res.status(200).json({
        results,
    });
});

//View Category by ID
router.get("/category/:id", async (req, res) => {
    const result = await getCategoryById(req.params.id);
    res.status(200).json(result);
});
