const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema(
  {
    id: Number,
    "properties": {
      "type": "object",
      "properties": {
        "marker-color": {
          "type": "string"
        },
        "marker-size": {
          "type": "string"
        },
        "marker-symbol": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "address": {
          "type": "string"
        },
        "website": {
          "type": "string"
        },
        "phone": {
          "type": "string"
        },
        "note": {
          "type": "string"
        },
        "hocamember": {
          "type": "string"
        }
      }
    },
    "geometry": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string"
        },
        "coordinates": {
          "type": "array",
          "items": {
            "type": "number"
          }
        }
      }
    },
    "clicks": Number,
  },
  {timestamps: true}
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Business", DataSchema);
