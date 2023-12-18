import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
   project_name:String,
   description:String,
   project_thumbnail:String,
   developers:[],
   testers:[],
   versions:[],
})

const Project = mongoose.models.project || mongoose.model("project",projectSchema);

export default Project