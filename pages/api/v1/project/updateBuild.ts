import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../../lib/mongodb";
import Build from "../../../../lib/models/build";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    const data = req.body;
    try {
      await connectDb();
      const existingBuild = await Build.findById(data?._id);

      if (!existingBuild) {
        return res.status(404).send({ error: "Build not found." });
      }

      // Update the existing build with the new data
      existingBuild.set(data);
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
