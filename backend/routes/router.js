const express = require("express");
const router = express.Router();
const Data = require("../models/data");
const Feedback = require("../models/feedback");

router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { name } = req.body;
  Data.findOneAndUpdate({properties: {name: name}}, {$inc: {clicks: 1}}, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findOneAndDelete(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create methid
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, name, coords } = req.body;

  if ((!id && id !== 0) || !name || !coords ) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }

  data.id = id;
  data.properties.name = name
  data.geometry.coordinates = coords
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.post("/send", (req, res) => {
  let feedback = new Feedback();

  const { message } = req.body;
  if (!feedback) {
    return res.json({
      succes: false,
      error: "INVALID"
    });
  }
  feedback.message = message;
  feedback.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

module.exports = router
