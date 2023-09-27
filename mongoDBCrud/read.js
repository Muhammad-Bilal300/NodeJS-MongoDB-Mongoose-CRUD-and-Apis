const dbConnect = require("../mongodb");
dbConnect().then((res) => {
  res
    .find({ name: "Hot 8" })
    .toArray()
    .then((data) => {
      console.log(data);
    });
});


let getData = async () => {
  let collection = await dbConnect();
  result = await collection.find({}).toArray();
  console.log(result);
};
getData();


