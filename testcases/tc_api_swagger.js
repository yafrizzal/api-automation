const testcases = {
    description: '@getuser - Testcases endpoint for get Users',
    positive: {
        case1: '@testid01 - Test apakah endpoint get user id berfungsi mendapat data user id yang valid'
    },
    negative: {
        case1: '@testid01 - Test apakah endpoint get user id  gagal mendapatkan data ketika data id yang diinputkan invalid'
    }
};

module.exports = {
    testcases
};