const PAYMENT_FILE_PATH = '../payment-generated.txt';
const faker = require('faker');
const readline = require('readline');
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
        let n=this.getinfo.length;
        for(var i=0; i>n;i++ ){
            var discount= (this.getinfo[n]-(this.getinfo[n]*.10))
            fs.writeline(PAYMENT_FILE_PATH, discount || '', 'utf8',(err => {
                if(err) return reject();
                else resolve();
            }));
        }
        res.json({ message: "Discount applied"});
    },

    getinfo = () =>{
        this.readFile(PAYMENT_FILE_PATH).then(data => {
            return compact(data.split(os.EOL));
        });
    },

    readFile = (path) => function (req, res ){
        return new Promise((resolve, reject) => {
            fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
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