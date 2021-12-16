//deberas de utilizar faker para generar los datos
const fs = require('fs');
const SHIPPMENT_FILE_PATH = '../shipment-generated.txt';
const faker = require('faker');

const LINE_ENDING = require('os').EOL;

module.exports = {
    createShipment: function (req, res) {
        //debera de simular un envio con dirección un precio y una persona con sus datos
            const person = faker.name +LINE_ENDING+ faker.address +LINE_ENDING+ faker.commerce.product;
            fs.writeFile(SHIPPMENT_FILE_PATH, person, (err)=>{
                if(!err){console.log('Shipping done!');}
            });
            res.status(201).send();            
        },  
              
    changeStatus: function (req, res) {
        //Debera de retornar una dirección random
        // codigo de respuesta 201
        // data la direcciòn random
        const addres = faker.address;
        res.status(201).send({addres: "The addres is "+addres});
    },
};
