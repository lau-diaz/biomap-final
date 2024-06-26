import { Router } from "express";
import { createCapsula, deleteCapsula, getCapsula, updateCapsula, getCapsulas } from "../controllers/capsula.controller.js";

const router = Router()
router.post('/capsula', createCapsula)
router.put('/capsula/:id', updateCapsula)
router.delete('/capsula/:id', deleteCapsula)
router.get('/capsula/:id', getCapsula)
router.get('/capsula', getCapsulas)
export default router