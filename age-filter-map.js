let ages = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let ableToBuyLotto = ages.filter((age)=> {
    return age >= 18
})


let displayData = ableToBuyLotto.map( (age) => { 
    let result = {} //remember to ask why a {empty object} was used
    result.age = age
    result.display = age + ' is old enough to buy lotto' 
    return result
})    
console.log(displayData)