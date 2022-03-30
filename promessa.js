let aceitar = false

console.log('Pedir um Uber')
const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('Pedido Aceito!') 
    }

    return reject('Pedido Negado!')
}) 

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('Finalizada'))

console.log('Aguardando')