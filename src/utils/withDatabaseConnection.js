// /utils/withDatabase.js
import connectDB from "@/utils/connectDB";

/**
 * Wraps a handler function with database connection logic
 * @param {Function} handler - The API route handler function
 * @returns {Function} - The wrapped handler with database connection
 */
export default function withDatabase(handler) {
  return async (req, res) => {
    try {
      await connectDB(); // Connect to the database
    } catch (err) {
      console.error("Database connection error:", err);
      res.status(500).json({ status: "failed", message: "Error connecting to the database" });
      return;
    }

    return handler(req, res);
  };
}
