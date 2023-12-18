import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../../../lib/mongodb";
import User from "../../../../../lib/models/users";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const data = req?.body;
  try {
    await connectDb();

    // Update the user by _id
    const user: any = await User.findOne({ email: data?.email });

    if (user?.password == data?.password) {
      res.status(200).send({ data: user, status: true });
    } else {
      res.status(200).send({ data: "Authentication file", status: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal server error" });
  }
}
