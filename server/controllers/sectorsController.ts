import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { OtherSector } from '../models/sectors/other';
import { STATUSCODE } from '../types';
import { ServicesSector } from '../models/sectors/service';
import {
  manufacturingSectorData,
  otherSectorData,
  sectorsData,
  serviceSectorData,
} from '../sectors';
import { ManufacturingSector } from '../models/sectors/manufacturing';
import { AllSector } from '../models/sectors/allSectors';

const MANUFACTURING_SECTOR_ID = '657371df88ff5e105c937055';
const OTHER_SECTOR_ID = '6571998e7776d69e64b6bde6';
const SERVICE_SECTOR_ID = '65719dfd1b637b27c8e7bd34';

const ALL_SECTORS_ID = '6574428ebb6da5a7d6c5721f';

export const getAllSectors = asyncHandler(
  async (req: Request, res: Response) => {
    const allSectorsId = req.body;
    const foundSectors = await AllSector.findById(ALL_SECTORS_ID);
    res.json(foundSectors);
  }
);

export const addAllSectors = async (req: Request, res: Response) => {
  try {
    const newSector = new AllSector({
      manufacturing: manufacturingSectorData,
      other: otherSectorData,
      service: serviceSectorData,
    });

    const savedSector = await newSector.save();
    res.json(savedSector);
  } catch (error) {
    console.log('error', error);
    throw new Error('An error occured');
  }
};

export const addOtherSector = asyncHandler(
  async (req: Request, res: Response) => {
    const reqData = req.body;

    const sector = await OtherSector.create(reqData);

    res.status(STATUSCODE.CREATED).json({
      message: `${sector?._id} added sector`,
    });
  }
);

export const getOtherSector = asyncHandler(
  async (req: Request, res: Response) => {
    const other = await OtherSector.findById(OTHER_SECTOR_ID);
    res.json(other);
  }
);

export const addServiceSector = asyncHandler(
  async (req: Request, res: Response) => {
    const reqData = req.body;
    const sector = await ServicesSector.create(reqData);

    res.status(STATUSCODE.CREATED).json({
      message: `${sector?._id} added sector`,
    });
  }
);

export const getServiceSector = asyncHandler(
  async (req: Request, res: Response) => {
    const service = await ServicesSector.findById(SERVICE_SECTOR_ID);
    // const serviceSectorData = serviceSector;
    res.json(service);
  }
);

export const addManufacturingSector = asyncHandler(
  async (req: Request, res: Response) => {
    const reqData = req.body;
    const sector = new ManufacturingSector(reqData);

    sector.save();

    res.status(STATUSCODE.CREATED).json({
      data: sector,
    });
  }
);

export const getManufacturingSector = asyncHandler(
  async (req: Request, res: Response) => {
    const manufacturing = await ManufacturingSector.findById(
      MANUFACTURING_SECTOR_ID
    );

    res.json(manufacturing);
  }
);
