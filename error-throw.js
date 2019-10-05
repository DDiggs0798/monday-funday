
addOne = function (numberToAddTo) {
    if (numberToAddTo === undefined) {
        throw new Error('you must provide a number to add to')
    }
    return numberToAddTo + 1
}
 
try{
    //failing to provide a number results in an error
    let result = addOne()
     

} catch (errorDetail) {
    console.log('something its wrong - ' + errorDetail.message)
}

