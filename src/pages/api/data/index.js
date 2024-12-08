import connectDB from "@/utils/connectDB";
import User from "../../../../models/User";

export default async function handler(req, res) {

  try {
    await connectDB(); // Connect to the database
  } catch(err) {
    console.log(err)
    res.status(500).json({status:'failed', message: "error in connecting to database"})
  }

  const { method, body, query } = req;

  switch (method) {
    case "POST": {
      const { name } = body;

      if (!name || name.length <= 3) {
        return res.status(422).json({ message: "Invalid name" });
      }

      try {
        const user = await User.create({ name });
        return res.status(201).json({ message: "User created successfully", user });
      } catch (error) {
        return res.status(500).json({ message: "Failed to create user", error: error.message });
      }
    }

    case "GET": {
      const { name } = query;

      if (!name || name.length <= 3) {
        return res.status(422).json({ message: "Invalid name" });
      }

      return res.status(200).json({ message: "Name received", name });
    }

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}
