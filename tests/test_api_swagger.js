const chai = require('chai');
chai.use(require('chai-json-schema'));

const expect = require('chai').expect;
const apiUnderTest = require('../api/api_swager');
const dataTest = require('../data/data_test_swagger');
const dataNegativeTest = require('../data/data_negative_test_swagger');
const { testcases }  = require('../testcases/tc_api_swagger');
const schemaResponse = require('../schema/response_getUser_swagger_schema');
const { before } = require('mocha');


describe(testcases.description, async () => {

    it(testcases.positive.case1, async () => {
        const data = dataTest.dataGetUser();
       
        const response = await apiUnderTest.getUser(data.id);
        expect(response.statusCode).to.equal(200)
        expect(response.body.id).to.equal(data.id);
    });

    it(testcases.negative.case1, async () => {
        const data = dataNegativeTest.dataGetUser();
       
        const response = await apiUnderTest.getUser(data.id);
        expect(response.statusCode).to.equal(404)
        expect(response.body.message).to.equal("user not found");
    });

    
});