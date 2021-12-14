const PAYMENT_FILE_PATH = '../payment-generated.txt';
const faker = require('faker');
const fs = require('fs');
const LINE_ENDING = require('os').EOL;

const dataflag = 7777777777;


module.exports = {
    
    create: async function (req, res) {
        const fd = fs.openSync(PAYMENT_FILE_PATH, 'a');
        fs.appendFileSync(fd, faker.commerce.price() + LINE_ENDING, 'utf8');
        console.log('pago generado');
        res.status(201).send();
    },

    applyDiscount: function (req, res) {
        //debera de restar una cantidad a cada precio en payment-generated.txt
        res.json({ message: ""});
    },

    getPromos: function (req, res) {
        req.json([
            {name: "BUENFIN"},
            {name: "HOTSALE"},
            {name: "CYBERMONDAY"},
            {name: "BLACKFRIDAY"},
            {name: "PRIMEDAY"},
        ]);
    }
};