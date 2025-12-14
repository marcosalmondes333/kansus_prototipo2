import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// REGISTRO
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Usuário já existe" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor" });
  }
});

export default router;
