import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../../lib/mongodb";
import Build from "../../../../lib/models/build";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  let data = req?.body;
  try {
    await connectDb();
    const status = [{type:0,message:"Ready To Submit",date:new Date()}]
    data.status = status
    const newBuild = await Build.create(data);

    if (newBuild) {
      res.status(200).send({ data: { data: newBuild, type: "created new" } });
    } else {
      res.status(500).send({ error: "Failed to create the build." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Server error." });
  }
}
