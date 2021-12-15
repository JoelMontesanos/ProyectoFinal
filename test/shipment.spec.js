const chai = require('chai');
const chaiHttp = require('chai-http');
const path = require('path');
const server = require('../app');
const should = chai.should();
const sinon = require('sinon');
const SHIPPING_FILE_PATH = path.resolve('../shipment-generated.txt');
const {Request, Response} = require('./mock');
const utils = require('./utils');
const {uniq} = require('lodash');
const Promise = require('bluebird');


describe('shippment check', () => {

    it('Should generate a shipping', done => { 
        setTimeout(() => {
            utils.generateShippment()
                .then(data => {
                    data.length.should.eql(1);
                })
        }, 500);
        done();
    });

    it('Should return and addres', done => { 
        setTimeout(() => {
            utils.reviewAddres()
                .then(data => {
                    data.length.should.eql(1);
                })
        }, 500);
        done();
    });



});