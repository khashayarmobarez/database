import connectDB from "@/utils/connectDB";
import User from "../../../../models/User";
import withDatabase from "@/utils/withDatabaseConnection";

async function handler(req, res) {


  const { method, body, query } = req;

  switch (method) {
    case "POST": {
      const { name, age, email } = body;

      if (!name || name.length <= 3) {
        return res.status(422).json({ message: "Invalid name" });
      }

      try {
        const user = await User.create({ name, age, email, courses: ['next, react'] });
        return res.status(201).json({ message: "User created successfully", user });
      } catch (error) {
        return res.status(500).json({ message: "Failed to create user", error: error.message });
      }
    }

    case "GET": {
      try {
        const users = await User.find()
        return res.status(200).json({ message: "Users fetched successfully", users });
        console.log(users)
      } catch(err) {
        return res.status(500).json({ message: "Failed to fetch users", error: err.message });
      }
    }


    default:
      res.setHeader("Allow", ["GET", "POST"]);
      return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
}


export default withDatabase(handler)
