require("dotenv").config();
const express = require("express");
const cors = require("cors");
const indexRouter = require("./routes/index-router");
const validateToken = require("./middlewares/validate-token");
const sendErrorResponse = require("./utils/send-errors-response");
const path = require("path");
const app = express();
const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server iniciado en el puerto " + PORT);
});

app.get("/init-db", async (req, res) => {
  try {
    const initDb = require("./database/db-init");
    await initDb();
    res.send("Base de datos inicializada correctamente ✅");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al inicializar la base de datos: " + err.message);
  }
});

app.use(
  cors({
    origin: [
      "https://troco.pro",
      "http://localhost:8080",
      "http://localhost:5173",
    ],
  })
);
app.use(validateToken);
app.use(indexRouter);
const staticDirectory = path.join(__dirname, "../public");
app.use(express.static(staticDirectory));
app.use((err, req, res, next) => {
  console.error(err);
  sendErrorResponse(res, err);
});
app.use((req, res, next) => {
  sendErrorResponse(res, {
    status: 404,
    code: "UNKNOWN_ENDPOINT",
    message: `Endpoint desconocido: ${req.method} ${req.path}`,
  });
});
