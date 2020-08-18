const faker = require('faker');

module.exports = {
    echo(){
        console.log("Teste");
    },

    geraProduto(){
        let produto = {
            "title": faker.hacker.abbreviation(),
            "description": faker.hacker.phrase(),
            "url": faker.internet.url()
        };
        return produto;
    }
}