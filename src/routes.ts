import { Router } from 'express';
import * as playerController from './controllers/players-controller';
import * as clubController from './controllers/clubs-controller';

const router = Router();
//Players
router.get('/players', playerController.getPlayer);
router.post ('/players', playerController.postPlayer);
router.get('/players/:id', playerController.getPlayerById);
router.delete('/players/:id', playerController.deletePlayer);
router.patch('/palyers/:id', playerController.updatePlayer);

//Clubs
router.get('/clubs', clubController.getClub);

export default router;