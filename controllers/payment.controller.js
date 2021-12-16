const PAYMENT_FILE_PATH = '../payment-generated.txt';
const faker = require('faker');
const LINE_ENDING = require('os').EOL;
const readline = require('readline');
const fs = require('fs');

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
            
            const  operation  = req.body;
            const read = readline.createInterface(
                fs.createReadStream(PAYMENT_FILE_PATH)
            );
            read.on('line', function(lineas){
                const num = Number(lineas);
                num = (num - operation).toFixed(2);
                fs.readFile(PAYMENT_FILE_PATH,'itf8', function(err,data){
                    const exp = new RegExp('^.*' + lineas + '.*$', 'gm');
                    descuentos = data.replace(exp, ''+newPrice+LINE_ENDING);
                    fs.writeFile(PAYMENT_FILE_PATH, descuentos, (err,file) =>{
                        if(!err){
                            res.json({ message: "Discounts apllied" });
                        };
                    });
                });
            });
        },// in doub ...

          


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