import { Router } from "express";
import { createRegion, deleteRegion, getRegion, updateRegion, getRegiones } from "../controllers/regions.controller.js";

const router = Router()
router.post('/region', createRegion)
router.put('/region/:id', updateRegion)
router.get('/region/:id', getRegion)
router.delete('/region/:id', deleteRegion)
router.get('/region', getRegiones)

export default router