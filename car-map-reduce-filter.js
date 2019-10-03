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

let pullModel = cars.map ((car) => {
    return car.modle
})

console.log(pullModel)