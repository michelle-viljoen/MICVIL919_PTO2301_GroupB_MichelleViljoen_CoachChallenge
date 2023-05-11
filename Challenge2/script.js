const carRental = 40
const currency = '$'
const days = 4

if (days >= 7) {
    console.log(currency, (carRental * days) - 50)

}

if (days >= 3 && days <=6) {
    console.log(currency, (carRental * days) - 20)
}



