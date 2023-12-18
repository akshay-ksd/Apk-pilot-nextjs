import mongoose, { Schema } from "mongoose";

const buildSchema = new Schema({
  project_id:String,
  version_id:String,
  apk_demo:String,
  apk_live:String,
  abb_live:String,
  demo_url:String,
  live_url:String,
  comments:String,
  testers:[],
  bug:[],
  status:[]
})

const Build = mongoose.models.build || mongoose.model("build",buildSchema);

export default Build