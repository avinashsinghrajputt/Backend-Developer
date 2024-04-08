// Import required modules
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

// Create Express app
const app = express();
const port = 3000;

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'my_database';

// Middleware to parse JSON requests
app.use(express.json());

// Function to connect to MongoDB
async function connectToMongoDB() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to MongoDB successfully');
        return client.db(dbName);
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}

// Route to get all documents from a collection
app.get('/documents', async (req, res) => {
    try {
        const db = await connectToMongoDB();
        const collection = db.collection('documents');
        const documents = await collection.find({}).toArray();
        res.json(documents);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to insert a document into a collection
app.post('/documents', async (req, res) => {
    try {
        const db = await connectToMongoDB();
        const collection = db.collection('documents');
        const result = await collection.insertOne(req.body);
        res.json({ message: 'Document inserted successfully', insertedId: result.insertedId });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to update a document in a collection
app.put('/documents/:id', async (req, res) => {
    try {
        const db = await connectToMongoDB();
        const collection = db.collection('documents');
        const result = await collection.updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body });
        res.json({ message: 'Document updated successfully', modifiedCount: result.modifiedCount });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to delete a document from a collection
app.delete('/documents/:id', async (req, res) => {
    try {
        const db = await connectToMongoDB();
        const collection = db.collection('documents');
        const result = await collection.deleteOne({ _id: ObjectId(req.params.id) });
        res.json({ message: 'Document deleted successfully', deletedCount: result.deletedCount });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
