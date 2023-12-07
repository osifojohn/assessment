import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import { userDetails } from '../models/userDetailsModel';
import { STATUSCODE } from '../types';

//@desc POST userDetails
//@route GET /user-details
//@access public
export const addUserDetails = asyncHandler(
  async (req: Request, res: Response) => {
    const reqData = req.body;

    const response = new userDetails(reqData);

    response.save();

    res.status(STATUSCODE.CREATED).json({
      data: response,
    });
  }
);

//@desc Update userDetails
//@route PUT /user-details/:id
//@access public
export const updateUserDetails = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId, userDetails: userInformation } = req.body;
    const userInfo = await userDetails.findById(userId);

    if (!userInfo) {
      res.status(STATUSCODE.BAD_REQUEST);
      throw new Error('User not found');
    }

    const updatedUserInfo = await userDetails.findByIdAndUpdate(
      userId,
      userInformation,
      {
        new: true,
      }
    );

    updatedUserInfo?.save();

    res.status(STATUSCODE.CREATED).json(updatedUserInfo);
  }
);
