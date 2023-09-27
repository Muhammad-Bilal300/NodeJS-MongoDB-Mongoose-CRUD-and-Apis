const dbConnect = require("../mongodb");
// dbConnect().then((res) => {
//   res
//     .find({ name: "Hot 8" })
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

let updateData = async () => {
  let collection = await dbConnect();
  result = await collection.updateOne(
    { name: "S7" },
    {
      $set: {
        price: 200000,
      },
    }
  );
  if (result.acknowledged) {
    console.log("Data UPdated");
  }
};
updateData();
