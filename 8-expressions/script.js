//https://ranekapi.origamid.dev/json/api/produto/'

async function fetchProdutos(url) {
    const response = await fetch(url)
    const jsonBody = await response.json()
    return jsonBody
    console.log(jsonBody)

}

const requisicao = fetchProdutos('https://ranekapi.origamid.dev/json/api/produto')

requisicao.then(response => {
    console.log(response)
})
