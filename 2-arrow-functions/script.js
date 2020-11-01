// function upperName(name){
//     return name.toUpperCase()
// }

// const upperName = function(name){
//     return name.toUpperCase()
// }

// upperName = name => name.toUpperCase()

// const countLetters = word => word.length

// console.log(countLetters("Yone"))

class Menu {
    constructor(menu) {
        this.menuElement = document.querySelector(menu)
        this.activeClass = 'active'
    }
    addActiveElement(){
        this.menuElement.addEventListener('click', (event) =>{
            event.target.classList.add('active')
        })
    }
}

const menu = new Menu('.principal')
menu.addActiveElement()

console.log(menu)