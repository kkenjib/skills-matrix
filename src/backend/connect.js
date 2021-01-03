const { MongoClient } = require("mongodb");

 

// Replace the following with your Atlas connection string                                                                                                                                        

const url = "mongodb+srv://admin:mongoDB@cluster0.7ye32.mongodb.net/<dbname>?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);

async function run() {

    try {

        await client.connect();

        console.log("Connected correctly to server");

    } catch (err) {

        console.log(err.stack);

    }

    finally {

        await client.close();

    }

}

run().catch(console.dir);