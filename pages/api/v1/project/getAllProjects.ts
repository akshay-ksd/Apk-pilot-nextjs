import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../../lib/mongodb";
import Project from "../../../../lib/models/project"
export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDb();
    const projects = await Project.find({})
   if(projects){
    res.status(200).json({ data: projects });
   }
  } catch(err) {
    console.log("err",err);
  }
}
