const dbConnect = require("../mongodb");
// dbConnect().then((res) => {
//   res
//     .insertOne({ name: "IPhone X", brand: "Apple", price: 250000 })
//     .then((result) => {
//   if (result.acknowledged) {
//     console.log("Data Inserted");
//   }
//     });
// });

let insertData = async () => {
  let collection = await dbConnect();
  result = await collection.insertMany([
    {
      name: "IPhone X",
      brand: "Apple",
      price: 250000,
    },
    {
      name: "IPhone 12",
      brand: "Apple",
      price: 200000,
    },
  ]);
  if (result.acknowledged) {
    console.log("Data Inserted");
  }
};
insertData();
