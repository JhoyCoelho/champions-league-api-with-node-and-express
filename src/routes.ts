import { Router } from 'express';
import * as playerController from './controllers/players-controller';

const router = Router();

router.get('/players', playerController.getPlayer);
router.post ('/players', playerController.postPlayer);
router.get('/players/:id', playerController.getPlayerById);
router.delete('/players/:id', playerController.deletePlayer);

export default router;