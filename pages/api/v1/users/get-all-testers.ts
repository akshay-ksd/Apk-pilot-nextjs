import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../../lib/mongodb";
import User from "../../../../lib/models/users"
export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDb();
    const users = await User.find({role:1})
   if(users){
    res.status(200).json({ data: users });
   }
  } catch(err) {
    console.log("err",err);
  }
}
