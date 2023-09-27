const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017/";
const database = "e-commerce";

async function dbConnect() {
  const client = new MongoClient(url);
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  }
  let db = client.db(database);
  return db.collection("products");
}

module.exports = dbConnect;