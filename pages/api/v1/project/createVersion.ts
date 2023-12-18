import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../../lib/mongodb";
import Project from "../../../../lib/models/project";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const data = req?.body;
  try {
    await connectDb();
    
    // Ensure that _id is a valid ObjectId
    const mongoose = require('mongoose');
    const ObjectId = mongoose.Types.ObjectId;
    const validId = ObjectId.isValid(data._id);

    if (!validId) {
      return res.status(400).json({ message: 'Invalid _id' });
    }

    // Update the document by pushing the data to the 'versions' array
    const updatedProject = await Project.findByIdAndUpdate(
      data._id,
      { $push: { versions: data } },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Version added successfully', updatedProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
