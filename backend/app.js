const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI;
console.log(process.env.MONGODB_URI);
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("Error in MongoDB Connection", err);
  });
//! Cors config
// const corsOptions = {
//   origin: ["http://localhost:5173"],
// };
// app.use(cors(corsOptions));
// //!Middlewares
// app.use(express.json()); //?Pass incoming json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//!Routes
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);
//! Error
app.use(errorHandler);

//!Start the server
const PORT = process.env.PORT || 8000;
console.log(PORT);
app.listen(PORT, () =>
  console.log(`Server is running on this port... ${PORT} `)
);
