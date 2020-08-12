Feature('productCRUD');

Scenario('Consulta lista de produto', async (I) => {
    let retorno = await I.sendGetRequest('api/products?page=1');
    I.assertEqual(retorno.status, 200);
    console.log(retorno.data);
});

Scenario('Consultar um produto', async (I) => {
    let listaProdutos = await I.sendGetRequest('api/products?page=1');
    let id=listaProdutos.data.docs[0]._id;
    let retorno = await I.sendGetRequest('api/products/' + id);
    I.assertEqual(retorno.status, 200);
    console.log(retorno.data);
});
