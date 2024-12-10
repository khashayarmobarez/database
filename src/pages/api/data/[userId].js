
import connectDB from "@/utils/connectDB";

// checking for data base connection
import withDatabase from "@/utils/withDatabaseConnection";
import User from "../../../../models/User";



async function handler(req, res) {


    const id = req.query.userId;
    console.log(req.query.userId)

    if(req.method === 'GET') {

        try {

            const userData = await User.findById(id)
        // others ways to write the find:
            // const userData = await User.find({name: 'asal kalali'})
        // only returns one(first one)
            // const userData = await User.findOne({name: 'asal kalali'})
            res.status(200).json({
                status: 'success',
                data: userData,
            })

        } catch (err) {
            return res.status(500).json({ message: "Failed to fetch users", error: err.message });
        }

    }
}

export default withDatabase(handler)