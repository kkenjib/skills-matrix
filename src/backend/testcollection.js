const MongoClient = require('mongodb').MongoClient;
const url = `mongodb+srv://admin:mongoDB@cluster0.7ye32.mongodb.net/<dbname>?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("test");
  dbo.createCollection("test", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); 