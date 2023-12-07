import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import { UserDetails } from '../models/userDetailsModel';
import { STATUSCODE } from '../types';

//@desc POST UserDetails
//@route GET /user-details
//@access public
export const addUserDetails = asyncHandler(
  async (req: Request, res: Response) => {
    const reqData = req.body;

    const response = new UserDetails(reqData);

    response.save();

    res.status(STATUSCODE.CREATED).json(response);
  }
);

//@desc Update UserDetails
//@route PUT /user-details/:id
//@access public
export const updateUserDetails = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId, userDetails: userInformation } = req.body;
    const userInfo = await UserDetails.findById(userId);

    if (!userInfo) {
      res.status(STATUSCODE.BAD_REQUEST);
      throw new Error('User not found');
    }

    const updatedUserInfo = await UserDetails.findByIdAndUpdate(
      userId,
      userInformation,
      {
        new: true,
      }
    );

    updatedUserInfo?.save();

    res.json(updatedUserInfo);
  }
);
