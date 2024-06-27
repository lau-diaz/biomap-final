import { Router } from 'express';
import { createEcosistema, deleteEcosistema, getEcosistema, updateEcosistema, getEcosistemas } from '../controllers/ecosistema.controller.js';

const router = Router()
router.post('/ecosistema', createEcosistema)
router.put('/ecosistema/:id', updateEcosistema)
router.get('/ecosistema/:id', getEcosistema)
router.delete('/ecosistema/:id', deleteEcosistema)
router.get('/ecosistema', getEcosistemas)

export default router