Feature('productCRUD');

Scenario('Consulta lista de produto', async (I) => {
    let retorno = await I.sendGetRequest('api/products?page=1');
    I.assertEqual(retorno.status, 200);
    //console.log(retorno.data);
});

Scenario('Consultar um produto', async (I) => {
    let listaProdutos = await I.sendGetRequest('api/products?page=1');
    let id=listaProdutos.data.docs[0]._id;
    let retorno = await I.sendGetRequest('api/products/' + id);
    I.assertEqual(retorno.status, 200);
    //console.log(retorno.data);
});

Scenario('Cria produto', async (I) => {
    let produto = {
        "title": "Rwby",
        "description": "Biblioteca para criar aplicativos",
        "url": "http://github.com" 
    };
    let retorno = await I.sendPostRequest('api/products', produto);
    I.assertEqual(retorno.status, 200);
    I.assertEqual(retorno.data.title, produto.title);
    //console.log(retorno.data);
    //console.log(produto.title);
});

Scenario('Deletar produto', async (I) => {
    let listaProdutos = await I.sendGetRequest('api/products?page=1');
    let id=listaProdutos.data.docs[0]._id;
    let retornoDeletar = await I.sendDeleteRequest('api/products/' + id);
    I.assertEqual(retornoDeletar.status, 200);
    let retorno = await I.sendGetRequest('api/products/' + id);
    I.assertEqual(retorno.data, null);
    //console.log(retorno.data);
});

Scenario('Editar um produto', async (I) => {
    let listaProdutos = await I.sendGetRequest('api/products?page=1');
    let id=listaProdutos.data.docs[0]._id;

    let produtoUpdate = {
        "title": "React",
        "description": "Biblioteca para criar aplicativos e font-end web",
        "url": "http://github.com/algumacoisa" 
    };

    let retorno = await I.sendPutRequest('api/products/' + id, produtoUpdate);
    I.assertEqual(retorno.status, 200);
    I.assertEqual(retorno.data.title, produtoUpdate.title);
    //console.log(retorno.data);
});