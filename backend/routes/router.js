const express = require("express");
const router = express.Router();
const Business = require("../models/business");
const Feedback = require("../models/feedback");
// Business.findOne({_id: '5bf351b451114a830d721d0b'}, function(err, business) {
//     if (err) {return err};
//
//     const masterBusiness = coreData.filter(dat => dat.properties.name == business.properties.name)
//     business.properties['marker-color'] = masterBusiness[0].properties['marker-color']
//     business.properties['marker-size'] = masterBusiness[0].properties['marker-size']
//     business.properties['-symbol'] = masterBusiness[0].properties['-symbol']
//     business.properties['address'] = masterBusiness[0].properties['address']
//     business.properties['website'] = masterBusiness[0].properties['website']
//     business.properties['phone'] = masterBusiness[0].properties['phone']
//     business.properties['hocamember'] = masterBusiness[0].properties['hocamember']
//     console.log("business scaffold: " + business)
//     Business.findOneAndUpdate({ 'properties.name': business.properties.name}, business, (err, businessChanged) => {
//       if (err) {
//         console.log("Something wrong when updating data!");
//         return err
//     }
//     console.log("altered db: " + businessChanged);
//     });
// });

router.get("/getData", (req, res) => {
  Business.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const { name } = req.body;
  Business.findOneAndUpdate(
    { "properties.name": name },
    { $inc: { clicks: 1 } },
    { upsert: true },
    err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    }
  );
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
  let business = new Business();

  const { id } = req.body;

  if (!id && id !== 0) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }

  data.id = id;
  data.properties.name = name;
  data.geometry.coordinates = coords;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.post("/send", (req, res) => {
  let feedback = new Feedback();

  const { message, email, version } = req.body;
  if (!feedback) {
    return res.json({
      succes: false,
      error: "INVALID"
    });
  }

  feedback.message = message;
  feedback.email = email;
  feedback.version = version;
  
  feedback.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

module.exports = router;
