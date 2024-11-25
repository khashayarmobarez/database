export default function handler(req, res) {
    if (req.method === "GET") {
        const { name } = req.body
        console.log(data)
        res.status(200).json({message: 'name recieved'})

        if(!name || name.length <= 3) {
            res.status(422).json({message: 'invalid name'})
            return
        }
    }

}