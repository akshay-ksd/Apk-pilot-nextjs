import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../../lib/mongodb";
import Build from "../../../../lib/models/build"
export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { project_id,version_id } = req.query;
  try {
    await connectDb();
    const build = await Build.find({project_id:project_id,version_id:version_id})
   if(build){
    res.status(200).json({ data: build });
   }
  } catch(err) {
    console.log("err",err);
  }
}
 