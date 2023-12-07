import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { otherSector } from '../models/sectors/other';
import { STATUSCODE } from '../types';
import { servicesSector } from '../models/sectors/service';
import { sectorsData } from '../sectors';
import { ManufacturingSector } from '../models/sectors/manufacturing';

export const getAllSectors = (req: Request, res: Response) => {
  const sectors = sectorsData;
  return res.json(sectors);
};

export const addOtherSector = asyncHandler(
  async (req: Request, res: Response) => {
    const reqData = req.body;
    const sector = await otherSector.create(reqData);

    res.status(STATUSCODE.CREATED).json({
      message: `${sector?._id} added sector`,
    });
  }
);

export const addServiceSector = asyncHandler(
  async (req: Request, res: Response) => {
    const reqData = req.body;
    const sector = await servicesSector.create(reqData);

    res.status(STATUSCODE.CREATED).json({
      message: `${sector?._id} added sector`,
    });
  }
);

export const addManufacturingSector = asyncHandler(
  async (req: Request, res: Response) => {
    console.log('goooof');

    const reqData = req.body;
    const sector = await ManufacturingSector.create(reqData);

    res.status(STATUSCODE.CREATED).json({
      message: ` added sector`,
    });
  }
);
