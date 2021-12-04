const mongoClient = require("mongodb").MongoClient;

exports.GETALL = async (MDB_NAME, name_collection, query) => {
  try {
    const client = await mongoClient.connect(process.env.CONNECT_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MDB", MDB_NAME);
    console.log("query", query);
    const db = client.db(MDB_NAME);
    const collection = db.collection(name_collection);
    const result = await collection.find(query).toArray();
    console.log("result", result);
    await client.close();
    return result;
  } catch (error) {
    console.log("error", error);
  }
};

exports.GETONE = async (MDB_NAME, name_collection, query) => {
  try {
    const client = await mongoClient.connect(process.env.CONNECT_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MDB", MDB_NAME);
    console.log("query", query);
    const db = client.db(MDB_NAME);
    const collection = db.collection(name_collection);
    const result = await collection.findOne(query);
    console.log("result", result);
    await client.close();
    return result;
  } catch (error) {
    console.log("error", error);
  }
};
