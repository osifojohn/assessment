import express from 'express';
import {
  addManufacturingSector,
  addOtherSector,
  addServiceSector,
  getAllSectors,
  getManufacturingSector,
  getOtherSector,
  getServiceSector,
} from '../controllers/sectorsController';
import { get } from 'http';

const router = express.Router();

router.get('/', getAllSectors);

router.post('/manufacturing', addManufacturingSector);
router.get('/manufacturing', getManufacturingSector);

router.post('/other', addOtherSector);
router.get('/other', getOtherSector);

router.post('/service', addServiceSector);
router.get('/service', getServiceSector);

export default router;
