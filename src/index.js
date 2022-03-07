const messages = [
    "German",
    "Marcela",
    "Diego",
    "Laura",
    "David",
    "Sandra",
    "Camila",
    "Viviana",
    "Carolina",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log('message: ', message);
};

module.exports = {
    randomMsg,
};