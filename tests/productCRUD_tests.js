Feature('productCRUD');
const faker = require('faker');
const helper = require('../utilities')

Scenario('Consulta lista de produto', async (I) => {
    let retorno = await I.sendGetRequest('api/products?page=1');
    I.assertEqual(retorno.status, 200);
});

Scenario('Consultar um produto', async (I) => {
    let listaProdutos = await I.sendGetRequest('api/products?page=1');
    let id=listaProdutos.data.docs[0]._id;
    let retorno = await I.sendGetRequest('api/products/' + id);
    I.assertEqual(retorno.status, 200);
});

Scenario('Cria produto', async (I) => {
    let produto = helper.geraProduto();
    let retorno = await I.sendPostRequest('api/products', produto);
    I.assertEqual(retorno.status, 200);
    I.assertEqual(retorno.data.title, produto.title);
});

Scenario('Deletar produto', async (I) => {
    let listaProdutos = await I.sendGetRequest('api/products?page=1');
    let id=listaProdutos.data.docs[0]._id;
    let retornoDeletar = await I.sendDeleteRequest('api/products/' + id);
    I.assertEqual(retornoDeletar.status, 200);
    let retorno = await I.sendGetRequest('api/products/' + id);
    I.assertEqual(retorno.data, null);
});

Scenario('Editar um produto', async (I) => {
    let listaProdutos = await I.sendGetRequest('api/products?page=1');
    let id=listaProdutos.data.docs[0]._id;

    let produtoUpdate = helper.geraProduto();

    let retorno = await I.sendPutRequest('api/products/' + id, produtoUpdate);
    I.assertEqual(retorno.status, 200);
    I.assertEqual(retorno.data.title, produtoUpdate.title);
});