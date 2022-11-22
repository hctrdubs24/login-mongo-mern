import { Router } from "express";
import {
  createUser,
  listUsers,
  login,
  userToUpdate,
  updateUser,
  deleteUser,
  updatePassword,
  listDatosPersonale,
  LoginXD,
} from "../controllers/User.controller.js";

const router = Router();

router.put("/password/:_id");
router.get("/users", listUsers);
router.get("/datos", listDatosPersonale);
router.get("/update/:_id", userToUpdate);
router.post("/create", createUser);
router.put("/update/:_id", updateUser);
router.delete("/delete/:_id", deleteUser);
router.put("/password/:_id", updatePassword);
// router.post("/login", login);

router.post("/login", LoginXD);

export default router;
