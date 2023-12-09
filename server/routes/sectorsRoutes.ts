import express from 'express';
import {
  addAllSectors,
  addManufacturingSector,
  addOtherSector,
  addServiceSector,
  getAllSectors,
  getManufacturingSector,
  getOtherSector,
  getServiceSector,
} from '../controllers/sectorsController';

const router = express.Router();

router.get('/all-sectors', getAllSectors);
router.post('/all-sectors', addAllSectors);

router.post('/manufacturing', addManufacturingSector);
router.get('/manufacturing', getManufacturingSector);

router.post('/other', addOtherSector);
router.get('/other', getOtherSector);

router.post('/service', addServiceSector);
router.get('/service', getServiceSector);

export default router;
