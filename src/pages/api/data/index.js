export default function handler(req, res) {
    if (req.method === "POST") {
      const { name } = req.body; // Use req.body for POST requests
  
      if (!name || name.length <= 3) {
        res.status(422).json({ message: 'Invalid name' });
        return;
      }
  
      res.status(200).json({ message: 'Name received', name });
    } else if (req.method === "GET") {
      const { name } = req.query; // Use req.query for GET requests
  
      if (!name || name.length <= 3) {
        res.status(422).json({ message: 'Invalid name' });
        return;
      }
  
      res.status(200).json({ message: 'Name received', name });
    } else {
      // Handle unsupported methods
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
  