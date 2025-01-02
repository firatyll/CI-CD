exports.getIndex = (req, res) => {
    res.status(200).json('Hello World!');
};

exports.postGreetings = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json('Please provide a name!');
    }
    res.status(200).json(`Greetings to ${name}!`);
};