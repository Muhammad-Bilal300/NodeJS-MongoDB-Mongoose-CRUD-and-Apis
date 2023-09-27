const express = require("express");
const app = express();
const dbConnect = require("../mongodb");
const mongodb = require("mongodb");

app.use(express.json());

app.get("/", async (req, res) => {
  const collection = await dbConnect();
  const data = await collection.find({}).toArray();
  res.send({ DB_Name: req.query.dbName, location: req.query.loc, data: data });
});

app.post("/post", async (req, res) => {
  const collection = await dbConnect();
  const result = await collection.insertMany([
    {
      name: "nord 3",
      brand: "One plus",
      price: 150000,
    },
    {
      name: "nord 4",
      brand: "One plus",
      price: 150000,
    },
  ]);
  res.send(result);
});

// app.put("/put/:name", async (req, res) => {
//   const collection = await dbConnect();
//   const result = await collection.updateOne(
//     {
//       name: req.params.name,
//     },
//     { $set: req.body }
//   );
//   res.send(result);
// });

app.put("/put", async (req, res) => {
  const collection = await dbConnect();
  const result = await collection.updateOne(
    {
      name: req.query.name,
    },
    { $set: req.body }
  );
  res.send(result);
});
app.patch("/put", async (req, res) => {
  const collection = await dbConnect();
  const result = await collection.updateMany(
    {
      name: req.query.name,
    },
    { $set: req.body }
  );
  res.send(result);
});

// app.delete("/delete", async (req, res) => {
//   const collection = await dbConnect();
//   const result = await collection.deleteOne(req.body);
//   res.send(result);
// });

app.delete("/delete", async (req, res) => {
  const collection = await dbConnect();
  const result = await collection.deleteOne({
    _id: new mongodb.ObjectId(req.query.id),
  });
  res.send(result);
});

app.delete("/delete/:id", async (req, res) => {
  const collection = await dbConnect();
  const result = await collection.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});

app.listen(5000);
