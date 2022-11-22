import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  CvPerso: {
    type: String,
  },
  Login: {
    type: String,
  },
  Password: {
    type: String,
  },
  DateStarts: {
    type: Date,
  },
  DateEnds: {
    type: Date,
  },
  StateAcount: {
    type: String,
  },
});

export default model("User", UserSchema);
