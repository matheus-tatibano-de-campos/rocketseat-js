let family = {
    incomes: [2500, 3000, 258, 136, 275],
    expenses:[186, 89, 100, 1296]
}

function sum(array){
    let total = 0;
    for(let value of array){
        total += value 
    }
    return total
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negtivo"

    if (itsOk){
        balanceText = "Positivo"
    }
    console.log(`Seu saldo é ${balanceText} : ${total.toFixed(2)} `)
}


calculateBalance()