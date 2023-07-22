const dolar = 5
const euro = 6
const bitcoin = 150000

const button = document.getElementById('convert-button')
const selectCoin = document.getElementById('currency-coin');
const inputValue = document.getElementById('input-value')
const labelSelectCoin = document.getElementById('currency-simbol')
const realValue = document.getElementById('real-value')
const currencyValue = document.getElementById('currency-value')
const flag = document.getElementById('flag')
const labelCurrencyCoin = document.getElementById('labelCurrencyCoin')

const convertValues = () => {
    realValue.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValue.value)

    if (selectCoin.value === 'Dólar Americano') {
        currencyValue.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD' }).format(inputValue.value / dolar)
        labelCurrencyCoin.textContent = 'Dólar Americano'
        flag.src = './Assets/EUA.png'

    }
    else if (selectCoin.value === 'Euro') {
        currencyValue.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'EUR' }).format(inputValue.value / euro)
        labelCurrencyCoin.textContent = 'Euro'
        flag.src = './Assets/Euro.png'

    }
    else if (selectCoin.value === 'Bitcoin') {
        currencyValue.textContent = new Intl.NumberFormat('pt-BT', { style: 'currency', currency: 'BTC' }).format(inputValue.value / bitcoin)
        labelCurrencyCoin.textContent = 'Bitcoin'
        flag.src = './Assets/Bitcoin.png'
    }   
}

const placeholderDelete = () => {
    if (inputValue.value === "") {
        inputValue.placeholder = "0"
    }
}

const changeValues = () => {
    if (inputValue.value === "") {
        realValue.textContent = 'R$ 10.000,00'
        inputValue.placeholder = '10.000,00'
        if (selectCoin.value === 'Dólar Americano') {
            currencyValue.textContent = new Intl.NumberFormat('pt-BT', { style: 'currency', currency: 'USD' }).format(10000 / bitcoin)
            labelCurrencyCoin.textContent = 'Dólar Americano'
            flag.src = './Assets/EUA.png'
        }
        else if (selectCoin.value === 'Euro') {
            currencyValue.textContent = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'EUR' }).format(10000 / euro)
            labelCurrencyCoin.textContent = 'Euro'
            flag.src = './Assets/Euro.png'
        }
        else if (selectCoin.value === 'Bitcoin') {
            currencyValue.textContent = new Intl.NumberFormat('pt-BT', { style: 'currency', currency: 'BTC' }).format(10000 / bitcoin)
            labelCurrencyCoin.textContent = 'Bitcoin'
            flag.src = './Assets/Bitcoin.png'
        }
    }
    else {
        convertValues()
    }
}

button.addEventListener('click', convertValues)
button.addEventListener('click', placeholderDelete)
selectCoin.addEventListener('change', changeValues)


