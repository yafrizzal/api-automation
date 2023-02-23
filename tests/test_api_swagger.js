const chai = require('chai');
chai.use(require('chai-json-schema'));

const expect = require('chai').expect;
const apiUnderTest = require('../api/api_swager');
const dataNegativeTest = require('../data/data_negative_test_swagger');
const { testcases }  = require('../testcases/tc_api_swagger');
const schemaResponse = require('../schema/response_getUser_swagger_schema');
const { before } = require('mocha');
const dataPayload = require('../data/prehookdata');


describe(testcases.description, async () => {
    let dataTampungan = '';
    // test/setup.js

    // root hook to run before every test (even in other files)
    before(async function () {
        let response = await apiUnderTest.createUser(dataPayload.dataPostUser())
        dataTampungan = response.body
    });
    
    // root hook to run after every test (even in other files)
    after(async function () {
        await apiUnderTest.deleteUserAll();
    });
  
    it(testcases.positive.case1, async () => {
       
        const response = await apiUnderTest.getUser(dataTampungan.id);
        expect(response.statusCode).to.equal(200)
        expect(response.body.id).to.equal(dataTampungan.id);
        for(let index = 0; index < response.body.length; index++) {
            expect(response.body).to.have.jsonSchema(schemaResponse.getUserSwaggerSchemaResponse);
        }
    });

    it(testcases.negative.case1, async () => {
        const data = dataNegativeTest.dataGetUser();
       
        const response = await apiUnderTest.getUser(data.id);
        expect(response.statusCode).to.equal(404)
        expect(response.body.message).to.equal("user not found");
        expect(response.body.errorCode).to.equal("ER-01");
    });

    it(testcases.negative.case2, async () => {
       
        const response = await apiUnderTest.getUser("");
        expect(response.statusCode).to.equal(400)    
    });
    
});