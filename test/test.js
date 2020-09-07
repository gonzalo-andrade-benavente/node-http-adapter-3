'use strict';

const server = require('../src/server');
const chai = require('chai')
const chaiHttp = require('chai-http');

//Assertion Style
chai.should();

//Middleware
chai.use(chaiHttp);

describe('Server Class Tests', function () {

    //Test Get all Subclass.
    describe('GET /healthcheck', () => {
        it('It should UP healthcheck ', () => {
            chai.request(server)
                .get('/healthcheck')
                //.set('x-country', 'CL')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.status.should.be.equal('UP');
                    //response.body.should.be.have.property('error');
                    //response.body.should.be.have.property('data');
                    //response.body.data.should.be.a('array');
                    //response.body.should.be.have.property('message');
                    //done();
                });
        });
    });

});