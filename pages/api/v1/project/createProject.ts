import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../../lib/mongodb";
import Project from "../../../../lib/models/project"
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const data = req?.body;
  
  try {
    await connectDb();
   const project = await Project.create(data);
   if(project){
    res.status(200).send({ data: project });
   }
  } catch {
    console.log("err");
  }
}
