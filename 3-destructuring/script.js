// function handleMouseMove(ev) {
//     const { clientX, clientY, target} = ev
//     console.log(clientX, clientY, target)
// }

function handleMouseMove({clientX, clientY}) {
    
    console.log(clientX, clientY)
} //desestrutura direto no argumento



// document.documentElement.addEventListener('mousemove', handleMouseMove)

const frutas = ['Banana', 'Abacate']

const [fruta1, fruta2] = frutas

console.log(fruta1, fruta2)

const useState = [
    'blue',
    function(color) {
        useState[0] = color
    }
]

const [color, setColor] = useState