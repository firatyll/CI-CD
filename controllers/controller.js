exports.getIndex = (req, res) => {
    res.status(200).json('Hello World!');
};

exports.postGreetings = (req, res) => {
    const { name } = req.body;
    res.status(200).json(`Greetings to ${name}!`);
};