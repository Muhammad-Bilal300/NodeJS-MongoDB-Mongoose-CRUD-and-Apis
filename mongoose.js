const mongoose = require("mongoose");

const mongooseConnection = async () => {
  await mongoose.connect("mongodb://0.0.0.0:27017/e-commerce");
};

mongooseConnection();

const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});
const saveInDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = new ProductModel({
    name: "IPhone X",
    brand: "Samsung",
    price: 100000,
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};
// saveInDB();

const updateInDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let updatedataResult = await ProductModel.updateOne(
    { name: "IPhone X" },
    {
      $set: {
        price: 200000,
      },
    }
  );

  console.log(updatedataResult);
};
// updateInDB();

const deleteInDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let deletedataResult = await ProductModel.deleteOne({ name: "S7" });

  console.log(deletedataResult);
};
// deleteInDB();

const findInDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let finddataResult = await ProductModel.find();

  console.log(finddataResult);
};
findInDB();
