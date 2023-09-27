const dbConnect = require("../mongodb");
// dbConnect().then((res) => {
//   res
//     .find({ name: "Hot 8" })
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

let deleteData = async () => {
  let collection = await dbConnect();
  result = await collection.deleteOne({ name: "IPhone X" });
  if (result.deletedCount !== 0) {
    console.log(`${result.deletedCount} record deleted`);
  } else {
    console.log(`0 record deleted`);
  }
};
deleteData();
