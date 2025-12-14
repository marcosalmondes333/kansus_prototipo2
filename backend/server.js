import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ROTAS
app.use("/api/auth", authRoutes);

// PORTA
const PORT = process.env.PORT || 5007;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(PORT, () =>
      console.log(`Servidor rodando na porta ${PORT}`)
    );
  })
  .catch((err) => console.log(err));
