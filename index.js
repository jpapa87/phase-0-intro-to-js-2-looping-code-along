const names = ["Jessica", "Nora", "Marissa"]
function writeCards(names){
    let thankYouCards = []
    for (let i =0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
}
    return thankYouCards;
}
    writeCards(names);
    function countDown(number){
        let countup = (number)
        while (countup > -1) {
            console.log(countup--);
          }
    }