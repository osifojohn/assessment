import { Schema, InferSchemaType, model } from 'mongoose';

const userDetailsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name'],
    },
    agreeToTerms: {
      type: Boolean,
      required: [true, 'Please agree to terms'],
    },
    sectors: [
      {
        name: {
          type: String,
          required: [true, 'Please add the user password'],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

type UserDetailsType = InferSchemaType<typeof userDetailsSchema>;
const UserDetails = model<UserDetailsType>('userDetails', userDetailsSchema);
export { UserDetailsType, UserDetails };
