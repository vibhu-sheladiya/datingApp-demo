// src/models/User.js
const mongoose = require("mongoose");
const config = require("../config/config");

const interestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logo: { type: String },
    is_active: {
      type: Boolean,
      default: true,
    },
  status:{type: Boolean,default: true},

  },
  {
    timestamps: true,
    versionKey: false,
    // toJSON: {
    //   transform: function (doc, data) {
    //     if (data?.logo) {
    //       data.logo = `${config.base_url}profile_images/${data.logo}`;
    //     }
    //   },
    // },
  }
);

const Hobbies = mongoose.model("hobbies", interestSchema);

module.exports = Hobbies;
