const fs = require('fs');

fs.readFile('./data.txt', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    names = data;

    // Step 1: splits names that are given into an array
    let test = names.split('\n');

    test.pop() // array


    // step 2: just get names
    // every even line has the names
    // create new array 
    const namesArr = [];
    test.forEach(function (name, index) {
        // console.log(name)
        // console.log(index)
        if (index % 2 === 0) {
            // console.log(name.split('-')[0])
            namesArr.push(name.split('-')[0])
        }

    })

    // Make new obj / arr that has unique names

    // 1. The unique count of full names (i.e. duplicates are counted only once)
    // 2. The unique count of last names
    // 3. The unique count of first names

    // step 1: create new array
    const uniqueName = []
    const firstNameArr = []
    const lastNameArr = []
    // step 2: make it unique
    // a. loop through names array
    namesArr.forEach(function (fullName) {
        // console.log(fullName)
        // push into new first name array
        // console.log(fullName.split(',')[0])
        firstNameArr.push(fullName.split(',')[1])
        lastNameArr.push(fullName.split(',')[0])
    })

    // console.log(firstNameArr.length)
    // console.log(lastNameArr.length)
    const firstNameObj = {}
    // console.log(firstNameObj)
    firstNameArr.forEach(function (firstName) {
        // console.log(firstName)
        if (!firstNameObj[firstName]) {
            // will only assign key | value to firstNameObj if it is unique | undefined
            firstNameObj[firstName] = 1
        }
    })
    // console.log(firstNameObj)
    // console.log(firstNameObj.length)
    firstNameCount = Object.keys(firstNameObj)
    console.log(firstNameCount.length)

    const lastNameObj = {}
    // console.log(lastNameObj)
    lastNameArr.forEach(lastName => {
        // console.log(lastName)
        // only way to "push" value into obj is by assigning a key
        // will only assign key | value to lastNameObj if it is unique | undefined
        if (!lastNameObj[lastName]) {
            lastNameObj[lastName] = 1
        }
    })

    // console.log(lastNameObj)
    lastNameCount = Object.keys(lastNameObj)
    console.log(lastNameCount.length)

});



