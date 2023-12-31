// TODO: this file! :)

const state = {
    number: [], //where we are storing all the numbers in the number bank
    odds: [],
    evens: []
}

const form = document.querySelector("form")
console.log(form)
const bank = document.querySelector(".bank") //added to the output tag in HTML file
const oddBank = document.querySelector(".oddBank")
const evenBank = document.querySelector(".evenBank")
const sortOne= document.querySelector("#sortOne") //pulled from the HTML file, # is representing the id in the HTML file
const sortAll= document.querySelector("#sortAll")




function render () {
    const numbersBank = state.number.map((num) => {  // num parameter is a single number within the number array
        return `<span>${num}</span>` // need to display and return html between the two tags

    })
    //console.log(numbersBank) //string array returned by the map function
    bank.innerHTML = numbersBank.join('') //this lets us manipulate the inner html of the output to pull together everything in the numbers bank. join joins all elements in an array together into one string
 
    const odds = state.odds.map((num) =>{
        return `<span>${num}</span>` 
    })
    oddBank.innerHTML= odds.join('')
    
    const evens = state.evens.map((num) => {
        return `<span>${num}</span>` 
    })
    evenBank.innerHTML = evens.join('')
    
}



form.addEventListener("submit", (event) =>{ //need to create an event when a number is added to the bank
    event. preventDefault()
    const numAdded = +event.target.number.value
    //console.log(numAdded) shows the number that is added into the bank 
    state.number.push(numAdded) //state.number is a key value pair, number lives within the object of state, push is the method .. pushing the number added by the user stored in numAdded
    console.log(state.number)
    render()
})

sortOne.addEventListener("click", () =>{
    const sortingOne = state.number.shift()// shift will sort and return the first number in the array

    if(sortingOne %2 ===0) {
        state.evens.push(sortingOne) // pushing to evens if even number 
        }else{
            state.odds.push(sortingOne) //if not even push to odds
        }
        render()
    })

sortAll.addEventListener("click", () => {
    
    while(state.number.length > 0) {
        const sortingOne = state.number.shift()// shift will sort and return the first number in the array

        if(sortingOne %2 ===0) {
            state.evens.push(sortingOne) // pushing to evens if even number 
            }else{
                state.odds.push(sortingOne) //if not even push to odds
            }
    }
            render()   
})
    