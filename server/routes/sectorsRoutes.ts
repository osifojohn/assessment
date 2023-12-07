import express from 'express';
import {
  addManufacturingSector,
  addOtherSector,
  addServiceSector,
  getAllSectors,
} from '../controllers/sectorsController';

const router = express.Router();

router.get('/', getAllSectors);
router.post('/manufacturing', addManufacturingSector);
router.post('/other', addOtherSector);
router.post('/service', addServiceSector);

export default router;
