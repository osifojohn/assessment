import express from 'express';

import {
  addUserDetails,
  updateUserDetails,
} from '../controllers/userDetailsController';

const router = express.Router();

router.post('/', addUserDetails);
router.post('/:id', updateUserDetails);

export default router;
