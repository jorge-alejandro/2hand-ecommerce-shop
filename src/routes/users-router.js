const express = require("express");
const { Router, json } = require("express");
const router = Router();
const { getAllUsers } = require("../services/db-service");
const { getUsersById } = require("../services/db-service");
const { updateUsersById } = require("../services/db-service");
module.exports = router;

//View All Users
router.get("/users", async (req, res) => {
    const results = await getAllUsers();
    res.status(200).json({
        results,
    });
});

//View User by ID
router.get("/users/:id", async (req, res) => {
    const result = await getUsersById(req.params.id);
    res.status(200).json(result);
});

//Create a User
router.post("/deals", express.json(), async (req, res) => {
    res.status(200).json({
        succes: true,
        data: "se crea el TROCOLO",
    });
});

//Modify User data
router.patch("/users-update/:id", express.json(), async (req, res) => {
    const result = await updateUsersById(req.params.id, req.body);
    res.status(200).json({
        succes: true,
        data: "se modifica la info del TROCOLO",
    });
});

//Delete User ---> This is not gonna be use, only for testing
router.patch("/deals", express.json(), async (req, res) => {
    res.status(200).json({
        succes: true,
        data: "Mandar a pastar al TROCOLO",
    });
});

//Create a User Register
router.post("/users/register", express.json(), async (req, res) => {
    res.status(200).json(req.body);
});
