import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../../lib/mongodb";
import User from "../../../../lib/models/users";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const data = req?.body;

  try {
    await connectDb();

    // Update the user by _id
    const updatedUser = await User.findByIdAndUpdate(data._id, data, {
      new: true,
    });

    if (updatedUser) {
      res.status(200).send({ data: updatedUser });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}
