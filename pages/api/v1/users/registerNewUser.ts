import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../../lib/mongodb";
import User from "../../../../lib/models/users"
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const data = req?.body;
  
  try {
    await connectDb();
   const user = await User.create(data);
   if(user){
    res.status(200).send({ data: user });
   }
  } catch {
    console.log("err");
  }
}
