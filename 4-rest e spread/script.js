// function showList(empresa, ...clientes){
//     console.log(empresa)
//     console.log(clientes)
// }

//...transforma numa array - rest

// showList('Origamid', 'João', 'Maria', 10)]

// const numeros = [1,2,3,4, 16, 56, 77, 88]

// console.log(Math.max(...numeros))

// const items = document.querySelectorAll('li')

// [...items].map(item => {
//     console.log(item)
// })

// console.log(items)

// const carro = { cor: 'Azul', portas: 4, ano: 2020}

// const cloneCarro2 = carro

// const cloneCarro = {...carro, turbo: true}

// console.log(cloneCarro)

class Transporte {
    constructor() {
        this.terrestre = true;
    }
    andar(){
        console.log('andou')
    }
}

class Carro extends Transporte {
    constructor(cor, portas){
        super()
        this.cor = cor;
        this.portas = portas
    }
}

const car = new Carro('verde', 5)

const cloneCar = {...car}

console.log(cloneCar)
console.log(car)