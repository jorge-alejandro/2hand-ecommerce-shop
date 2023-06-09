const express = require("express");
const { Router, json } = require("express");
const router = Router();
const { getvalidationCodes } = require("../services/db-service");
const { getvalidationCodesById } = require("../services/db-service");
module.exports = router;

//View All validation_codes
router.get("/validation-codes", async (req, res) => {
    const results = await getvalidationCodes();
    res.status(200).json({
        results,
    });
});

//View Validation_codes by ID
router.get("/validation-codes/:id", async (req, res) => {
    const result = await getvalidationCodesById(req.params.id);
    res.status(200).json(result);
});
