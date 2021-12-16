const fs = require('fs');
const path = require('path');
const KEY_FILE = path.resolve('./valid-keys.txt'); //originaly it was ./valid-keys.txt
const PAYMENT_FILE_PATH = path.resolve('../payment-generated.txt');
const os = require('os');
const faker = require('faker');
const SHIPPING = path.resolve('../shipping-generated.txt');
const {compact} = require('lodash');

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

const  getKeysFromFile =  () => {
    return readFile(KEY_FILE)
        .then(data => {
            return compact(data.split(os.EOL));
        })
};

const getFromFile =  (path) => {
    return readFile(path)
        .then(data => {
            return compact(data.split(os.EOL));
        })
};

const generateKeysFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(KEY_FILE, data || '', 'utf8', (err => {
            if(err) return reject();
            else resolve();
        }))
    })
};

const generatePaymentFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(PAYMENT_FILE_PATH, data || '', 'utf8', (err => {
            if(err) return reject();
            else resolve();
        }))
    })
};


const clearKeysFile = () => {
    return removeFile(KEY_FILE);
};


const removeFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.unlink(path, err => {
            if(err && err.code === 'ENOENT') resolve();
            else if (err) reject(err);
            else resolve()
        });
    })
};


const generateShippment = (data) => {
      return new Promise((resolve,reject) =>{
        const person = faker.name +LINE_ENDING+ faker.address +LINE_ENDING+ faker.commerce.product;
            fs.writeFile(SHIPPING, person, (err)=>{
                if(!err){console.log('Shipping done!');}
            });
            res.status(201).send();
      });   
};

const reviewAddres = (data) => {
    return new Promise((resolve,reject)=> {
        const addres = faker.address;
        return addres;
    });
};


module.exports = {
    readFile,
    removeFile,
    getKeysFromFile,
    clearKeysFile,
    generateKeysFile,
    getFromFile,
    generatePaymentFile,
    generateShippment,
    reviewAddres,
};
