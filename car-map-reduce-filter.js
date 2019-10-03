let cars = [{
    make: 'ford',
    model: 'explorer',
    year: 2010
},  {
    make: 'honda',
    model: 'element',
    year: 2014
}, {
    make: 'nissan',
    model: 'rouge',
    year: 2010
}]

let pullYear = cars.filter((car) => {
    return car.year === 2010
    
})

let displayData = pullYear.map ((car) => {
    let result = car
    result.display =car.year + ' ' + car.make + ' ' + car.model
    return result
})
//car.year + ' ' + car.make + ' ' + car.model; displays it like '2010 nissan rouge'
console.log(displayData)