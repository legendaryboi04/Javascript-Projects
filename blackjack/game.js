let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.querySelector("#cards-el")
let amountEl=document.querySelector("#money")
console.log(cardsEl)
console.log(sumEl)
console.log(messageEl)
console.log(amountEl)
let cards=[]
let sum = 0
let hasBlackJack=false
let isAlive=true
let message = ""
let card=0
let uname="ZORD"
let amount=200


function getrandom()
{
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber===1)
    return 11
    else if(randomNumber>10)
    return 10
    else
    return randomNumber

}

function startgame()
{
    isAlive=true
    let firstCard = getrandom()
    let secondCard = getrandom()
    sum=firstCard+secondCard
    cards=[firstCard,secondCard]
    console.log(sum)
    rendergame();
    
}
function rendergame()
{
    
        if (sum <= 20) {
            message = "Do you want to draw a new card? "
        } else if (sum === 21) {
            message = "Wohoo! You've got Blackjack! "
            hasBlackJack = true
        } else {
            message = "You're out of the game! "
            isAlive = false
        }
        sumEl.textContent= "sum :"+" "+ sum;
        cardsEl.textContent= "cards :"
        for(let i=0;i<cards.length;i++)
        {
            cardsEl.textContent+=cards[i]+" "
        }
 
        messageEl.textContent = message;
        amountEl.textContent= uname+" "+":"+" "+"$"+amount
}
function newcard(){
    if(isAlive===true && hasBlackJack===false)
    {
    card =getrandom()
    sum += card
    cards.push(card)
    rendergame()
    }
}

    