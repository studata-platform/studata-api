import { Resource } from "@data-science-platform/shared";
import mongoose, { Document, Model } from "mongoose";
import articleSchema from "./articleSchema";

export default (): Model<Document, {}> =>
  mongoose.model(Resource.Article, articleSchema);
