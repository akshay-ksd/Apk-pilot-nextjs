import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../../lib/mongodb";
import Build from "../../../../lib/models/build";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    const data = req.body;
    try {
      await connectDb();
      const existingBuild = await Build.findById(data?._id);
      const testerId = data?.testerId;
      if (!existingBuild) {
        return res.status(404).send({ error: "Build not found." });
      }

      // Remove all data in the testers array
      existingBuild.testers = [];

      // Push the new testerId into the testers array
      if (data.task == "ADD") {
        existingBuild.testers.push(testerId);
      }

      // Save the updated build
      const updatedBuild = await existingBuild.save();

      if (updatedBuild) {
        res.status(200).send({ data: { data: updatedBuild, type: "updated" } });
      } else {
        res.status(500).send({ error: "Failed to update the build." });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Server error." });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
