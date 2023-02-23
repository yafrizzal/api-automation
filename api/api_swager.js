const httpLib = require('supertest');
const serverAPI = httpLib('http://localhost:1234/v1');


function createUser(data) {
    return serverAPI
        .post('/users')
        .set('Authorization', 1234)
        .send(data);
}

function getUser(userId) {
    return serverAPI
        .get(`/users/${userId}`)
        .set('Authorization', 1234);
}

function deleteUserAll(){
    return serverAPI
    .delete("/users/removeAll")
}

module.exports = {
    createUser,
    getUser,
    deleteUserAll
}