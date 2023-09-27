const express = require("express");
const mongodb = require("mongodb");
const multer = require("multer");
require("./config");
const ProductModel = require("./product");
const app = express();
app.use(express.json());

// Create
app.post("/create", async (req, res) => {
  let insertedData = new ProductModel(req.body);
  let result = await insertedData.save();
  console.log(result);
  res.send(result);
});

// Read
app.get("/getData", async (req, res) => {
  let findedData = await ProductModel.find();
  console.log(findedData);
  res.send(findedData);
});

// Update
app.patch("/updateData/:id", async (req, res) => {
  let updateData = await ProductModel.updateOne(
    {
      _id: new mongodb.ObjectId(req.params.id),
    },
    {
      $set: {
        name: "One Plus",
      },
    }
  );
  console.log(updateData);
  res.send(updateData);
});

// Delete
app.delete("/deleteData", async (req, res) => {
  let deletedData = await ProductModel.deleteOne({
    _id: new mongodb.ObjectId(req.query.id),
  });
  console.log(deletedData);
  res.send(deletedData);
});


// Search
app.get("/search/:key", async (req, res) => {
  let findedData = await ProductModel.find({
    $or: [
      {
        name: { $regex: req.params.key },
      },
      {
        brand: { $regex: req.params.key },
      },
    ],
  });
  console.log(findedData);
  res.send(findedData);
});

// Upload Files
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/uploadFile", upload, async (req, res) => {
  res.send("File Uploaded");
});

app.listen(5000);


