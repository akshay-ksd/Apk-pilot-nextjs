import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../../../lib/mongodb";
import Build from "../../../../../lib/models/build";
import Project from "../../../../../lib/models/project";
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { testerId } = req.query;
  try {
    await connectDb();
    let data = []
    // Assuming testerId is passed as a query parameter
    const builds = await Build.find({
      testers: { $in: [testerId] },
      "status.type": { $ne: 4 },
    });
    


    if (builds.length > 0) {
      for(let item of builds){
        const project = await Project.findById(item?.project_id)
        data.push({build:item,project:{project_name:project?.project_name,project_thumbnail:project?.project_thumbnail}})
      }

      res.status(200).json({ data: data });
    } else {
      res.status(404).json({ message: "No builds found for the specified testerId." });
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
