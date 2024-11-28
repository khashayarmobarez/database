import connectDB from "@/utils/connectDB";

// mongodb+srv://khashayarmobarez333:AlAOnlZlSfE3Gx8Q@firstcluster.3gfvw.mongodb.net/?retryWrites=true&w=majority&appName=firstCluster
const mongoose = require("mongoose")

export default async function handler(req, res) {
    await connectDB;
    if (req.method === "POST") {
      const { name } = req.body; // Use req.body for POST requests
  
      if (!name || name.length <= 3) {
        res.status(422).json({ message: 'Invalid name' });
        return;
      }
  
      res.status(200).json({ message: 'Name received', name });
    } else if (req.method === "GET") {
      const { name } = req.query; // Use req.query for GET requests

      // MONGO_USER=khashayarmobarez333
      // MONGO_PASS=AlAOnlZlSfE3Gx8Q
      // MONGO_URI= mongodb+srv://${MONGO_USER}:${MONGO_PASS}@firstcluster.3gfvw.mongodb.net/?retryWrites=true&w=majority&appName=firstCluster
  
      if (!name || name.length <= 3) {
        res.status(422).json({ message: 'Invalid name' });
        return;
      }

      // connect to db
      mongoose.connect('mongodb+srv://khashayarmobarez333:AlAOnlZlSfE3Gx8Q@firstcluster.3gfvw.mongodb.net/?retryWrites=true&w=majority&appName=firstCluster',
        () => console.log('conntected to db')
      )

  
      res.status(200).json({ message: 'Name received', name });
    } else {
      // Handle unsupported methods
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
  