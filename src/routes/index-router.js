const { Router } = require("express");
const router = Router();
const usersRouter = require("./users-router");
const itemsRouter = require("./items-router");
const dealsRouter = require("./deals-router");
const categoryRouter = require("./category-router");
const validationCodes = require("./validation-codes-router");

router.use(usersRouter);
router.use(itemsRouter);
router.use(dealsRouter);
router.use(categoryRouter);
router.use(validationCodes);

module.exports = router;
