function positivo() {
    return true
}
const miAsinc = new Promise((resolve, reject) => {
    function saludar() {
        console.log("Hola soy una promesa")
    }
    setTimeout(saludar, 5000)
    if (true) {
        resolve()
    } else {
        reject()
    }
})
function* generaId() {
    let id = 0;
    while(true) {
        id +=2
        if (id === 10000) {
            return id
        }
        yield id
    }
}