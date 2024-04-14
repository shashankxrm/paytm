const express = require("express");
const rootRouter = require("./routes/index");
const app = express();

// Requests to /api/v1 will be handled by rootRouter
app.use("api/v1", rootRouter);  


