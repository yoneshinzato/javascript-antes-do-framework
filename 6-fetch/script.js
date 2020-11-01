//fetch
 fetch('https://ranekapi.origamid.dev/json/api/produto')
 .then((response) => response.json())
 .then(json => {
     document.querySelector('#app').innerHTML = json[0].nome
     console.log(json)
 })

const data = {
    id: "andrerafa",
  nome: "Andre",
  email: "andrerafa@origamid.com",
  senha: "123456",
  cep: "123456",
  rua: "Ali Perto",
  numero: "230",
  bairro: "Botafogo",
  cidade: "Rio de Janeiro",
  estado: "Rio de Janeiro"
}

fetch('https://ranekapi.origamid.dev/json/api/produto/usuario', {
    method: "POST",
    headers: {
        "Content-Type": 'application/json'
    ,
    body: JSON.stringify(data)
}

})